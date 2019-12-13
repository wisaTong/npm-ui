import { h, Fragment } from 'preact';
import { useState, useEffect } from 'preact/hooks';
import api from '../../api';
import Breadcrumb from './Breadcrumb';
import Slicedbread from './Slicedbread';
import ImportBtn from '../ImportBtn';

const Loaf = () => {
  const [cwd, setCwd] = useState(null);

  const fetchDirsSetCwd = async (path) => {
    const wd = await api.fetchDirs(path);
    setCwd(wd);
  };

  useEffect(async () => { setCwd(await api.fetchDirs()) }, []);

  return cwd
    ? <Fragment>
      <Breadcrumb path={cwd.path} callback={fetchDirsSetCwd} />
      <Slicedbread dirs={cwd.dirs} callback={fetchDirsSetCwd} />
      <ImportBtn path={cwd.path} />
    </Fragment>
    : null;
};

export default Loaf;
