import { h, Fragment } from 'preact';
import { useState, useEffect } from 'preact/hooks';
import api from '../../api';
import DepList from '../DepList';

const NpmContentContainer = ({ path }) => {
  const [hasPkgJson, setPkgJson] = useState(false);

  useEffect(async () => { setPkgJson(await api.hasPkgJson(path)) }, [path]);

  return (
    hasPkgJson
      ? <DepList path={path} />
      : null
  );
};

export default NpmContentContainer;
