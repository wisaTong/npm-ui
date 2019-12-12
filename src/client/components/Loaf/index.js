import { h } from 'preact';
import { useState, useEffect } from 'preact/hooks';
import querystring from 'querystring';
import Breadcrumb from './Breadcrumb';
import Slicedbread from './Slicedbread';

async function fetchDirs(path) {
  const url = 'http://localhost:3000/dirs?';
  const res = await fetch(path ? url + querystring.stringify({ path }) : url);
  return res.json();
}

const Loaf = () => {
  const [cwd, setCwd] = useState(null);

  const fetchDirsSetCwd = async (path) => {
    const wd = await fetchDirs(path);
    setCwd(wd);
  };

  useEffect(() => { fetchDirsSetCwd() }, []);

  return cwd
    ? [
      <Breadcrumb path={cwd.path} callback={fetchDirsSetCwd} />,
      <Slicedbread dirs={cwd.dirs} callback={fetchDirsSetCwd} />
    ]
    : null;
};

export default Loaf;
