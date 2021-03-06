import _ from 'underscore';
import { h } from 'preact';
import { useState } from 'preact/hooks';
import api from '../../api';
import DepList from './presentational';

const DepListContainer = ({ path }) => {
  const [pkgJson, setContent] = useState(null);

  const importPkgJson = async (path) => {
    const content = await api.pkgJsonContent(path);
    setContent(content);
  };

  return (
    pkgJson
      ? <DepList pkgJson={pkgJson} path={path} />
      : <button class='import-btn' onClick = { () => { importPkgJson(path) } }>import</button>
  );
}

export default DepListContainer;
