import { h, Fragment } from 'preact';
import { useState, useEffect } from 'preact/hooks';
import api from '../../api';

const ImportBtn = ({ path }) => {
  const [hasPkgJson, setHasPkgJson] = useState(false);

  useEffect(async () => { setHasPkgJson(await api.fetchHasPkgJson(path)) }, [path])

  return (
    hasPkgJson
      ? <Fragment>
        <button onClick={() => { console.log(path) }}>import</button>
      </Fragment>
      : null
  );
};

export default ImportBtn;
