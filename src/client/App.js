import { h } from 'preact';
import { useState, useEffect } from 'preact/hooks';
import querystring from 'querystring';

import Header from './components/Header';
import Breadcrumb from './components/Breadcrumb';
import './app.css';

async function apiDirs(path) {
  const url = 'http://localhost:3000/dirs?';
  const res = await fetch(path ? url + querystring.stringify({ path }) : url);
  return res.json();
}

const App = () => {
  const [cwd, setCwd] = useState(null);

  const fetchSetDirs = async (path) => {
    const wd = await apiDirs(path);
    setCwd(wd);
  };

  useEffect(async () => { fetchSetDirs() }, []);

  return (
    <div class='app'>
      <Header />
      <div class='app-container'>
        {cwd
          ? <Breadcrumb path={cwd.path} callback={fetchSetDirs} />
          : null}
      </div>
    </div>
  );
};

export default App;
