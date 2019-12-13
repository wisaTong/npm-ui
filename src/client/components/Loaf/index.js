import { h, Fragment } from 'preact';
import { useState, useEffect } from 'preact/hooks';
import api from '../../api';
import Breadcrumb from './Breadcrumb';
import Slicedbread from './Slicedbread';
import NpmContent from '../NpmContent';

const Loaf = () => {
  const [cwd, setCwd] = useState(null);

  const fetchDirsSetCwd = async (path) => {
    const wd = await api.dirs(path);
    setCwd(wd);
  };

  useEffect(async () => { setCwd(await api.dirs()) }, []);

  return cwd
    ? <Fragment>
      <Breadcrumb path={cwd.path} callback={fetchDirsSetCwd} />
      <Slicedbread dirs={cwd.dirs} callback={fetchDirsSetCwd} />
      <NpmContent path={cwd.path} />
    </Fragment>
    : null;
};

export default Loaf;
