import { h, Fragment } from 'preact';
import { useState, useEffect } from 'preact/hooks';
import api from '../../api';
import Breadcrumb from './Breadcrumb';
import Slicedbread from './Slicedbread';
import NpmContent from '../NpmContent';
import './style.css';

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
      <div class='loaf-body'>
        <Slicedbread dirs={cwd.dirs} callback={fetchDirsSetCwd} />
        <NpmContent path={cwd.path} />
      </div>
    </Fragment>
    : null;
};

export default Loaf;
