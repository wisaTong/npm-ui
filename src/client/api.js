import querystring from 'querystring';

const BASE_URL = 'http://localhost:3000';

const encode = (source) => querystring.stringify(source);

async function fetchDirs(path) {
  const url = path ? `${BASE_URL}/dirs?${encode({ path })}` : `${BASE_URL}/dirs`;
  const res = await fetch(url);
  return res.json();
}

async function fetchHasPkgJson(path) {
  const url = `${BASE_URL}/exists?${encode({ path: path + '/package.json' })}`
  const res = await fetch(url);
  return res.json();
}

export default {
  fetchDirs,
  fetchHasPkgJson
};
