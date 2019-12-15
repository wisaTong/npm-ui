import { h, Fragment } from 'preact';
import { useState, useEffect } from 'preact/hooks';
import api from '../../api';
import DepList from '../DepList';
import './style.css';
import NotNpm from './NotNpm';

const NpmContentContainer = ({ path }) => {
  const [hasPkgJson, setPkgJson] = useState(false);

  useEffect(async () => { fetchPkgJson() }, [path]);
  const fetchPkgJson = async () => {
    setPkgJson(await api.hasPkgJson(path));
  }

  const projectCreationHanlder = async (name) => {
    await api.newProject(name, path)
    await fetchPkgJson()
  }

  return (
    <div class="npm-content-container">
      {hasPkgJson ? (
        <DepList path={path} />
      ) : (
        <NotNpm path={path} onProjectCreate={projectCreationHanlder} />
      )}
    </div>
  );
};

export default NpmContentContainer;
