import { h, Fragment } from 'preact';
import { useState, useEffect } from 'preact/hooks';
import querystring from 'querystring';
import Breadcrumb from './Breadcrumb';
import Slicedbread from './Slicedbread';
import ImportBtn from '../ImportBtn/ImportBtn';

async function fetchDirs(path) {
  const url = 'http://localhost:3000/dirs?';
  const res = await fetch(path ? url + querystring.stringify({ path }) : url);
  return res.json();
}

function fetchPkgJson(path) {
  fetch('http://localhost:3000/readfile?' + querystring.stringify({ path }))
    .then(res => res.json())
    .then(console.log);
}

const Loaf = () => {
  const [cwd, setCwd] = useState(null);

  const fetchDirsSetCwd = async (path) => {
    const wd = await fetchDirs(path);
    setCwd(wd);
  };

  useEffect(() => { fetchDirsSetCwd() }, []);

  return cwd
    ? <Fragment>
      <Breadcrumb path={cwd.path} callback={fetchDirsSetCwd} />
      <Slicedbread dirs={cwd.dirs} callback={fetchDirsSetCwd} />
      <ImportBtn path={cwd.path} />
    </Fragment>
    : null;
};

export default Loaf;
