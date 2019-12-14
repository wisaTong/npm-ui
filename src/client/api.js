import querystring from 'querystring';

const BASE_URL = 'http://localhost:3000';

const encode = (source) => querystring.stringify(source);

async function dirs(path) {
  const url = path ? `${BASE_URL}/dirs?${encode({ path })}` : `${BASE_URL}/dirs`;
  const res = await fetch(url);
  return res.json();
}

async function hasPkgJson(path) {
  const url = `${BASE_URL}/exists?${encode({ path: path + '/package.json' })}`;
  const res = await fetch(url);
  return res.json();
}

async function pkgJsonContent(path) {
  const url = `${BASE_URL}/readfile?${encode({ path: path + '/package.json' })}`;
  const res = await fetch(url);
  return res.json();
}

async function uninstall(path, pkg) {
  const url = `${BASE_URL}/uninstall`;
  const res = await fetch(url, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ path, pkg })
  });
  return res.ok;
}

export default {
  dirs,
  hasPkgJson,
  pkgJsonContent,
  uninstall
};
