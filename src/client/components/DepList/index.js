import _ from 'underscore';
import { h } from 'preact';
import { useState, useEffect } from 'preact/hooks';
import api from '../../api';
import DepList from './DepList';

const DepListContainer = ({ path }) => {
  const [pkgJson, setContent] = useState(null);

  const importPkgJson = async (path) => {
    const content = await api.pkgJsonContent(path);
    setContent(content);
  };

  return (
    pkgJson
      ? <DepList deps={_.keys(pkgJson.dependencies)} />
      : <button onClick = { () => { importPkgJson(path) } }>import</button>
  );
}

export default DepListContainer;
