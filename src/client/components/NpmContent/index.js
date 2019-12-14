import { h, Fragment } from 'preact';
import { useState, useEffect } from 'preact/hooks';
import api from '../../api';
import DepList from '../DepList';
import './style.css';
import NotNpm from './NotNpm';

const NpmContentContainer = ({ path }) => {
  const [hasPkgJson, setPkgJson] = useState(false);

  useEffect(async () => { setPkgJson(await api.hasPkgJson(path)) }, [path]);

  return (
    <div class='npm-content-container'>
      {
        hasPkgJson
          ? <DepList path={path} />
          : <NotNpm />
      }
    </div>
  );
};

export default NpmContentContainer;
