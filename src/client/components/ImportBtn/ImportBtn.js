import { h } from 'preact';
import { useState, useEffect } from 'preact/hooks';
import querystring from 'querystring';

const ImportBtn = ({ path }) => {
  const query = querystring.stringify({ path: path + '/package.json' });
  const [hasPkgJson, setHasPkgJson] = useState(false);

  useEffect(async () => {
    fetch('http://localhost:3000/exists?' + query)
      .then(res => res.json())
      .then(json => setHasPkgJson(json))
      .catch(console.error);
  }, [path])

  console.log('render');

  return (
    hasPkgJson
      ? <button onClick={() => {console.log(path)}}>import</button>
      : null
  );
};

export default ImportBtn;
