import _ from 'underscore';
import { h, Fragment } from 'preact';
import { useState } from 'preact/hooks';
import api from '../../api';
import './style.css';

const DepList = ({ pkgJson, path }) => {
  const { dependencies, devDependencies } = pkgJson;
  return (
    <div class='deplist-holder'>
      <h1>Dependecies</h1>
      <ul class='deplist'>
        {_.keys(dependencies)
          .map(d => <DepEntry name={d} callback={() => api.uninstall(path, d)} />)}
      </ul>
      <h1>Development Dependecies</h1>
      <ul class='deplist'>
        {_.keys(devDependencies)
          .map(d => <DepEntry name={d} callback={() => api.uninstall(path, d)} dev={true} />)}
      </ul>
    </div>
  );
};

const uninstall = async (setState, setGone, apiCall) => {
  setState(true);
  await apiCall();
  setGone(true);
};

const DepEntry = ({ name, callback, dev }) => {
  const [hover, setHover] = useState(false);
  const [uninstalling, setUninstalling] = useState(false);
  const [gone, setGone] = useState(false);

  const mouseOver = () => setHover(true);
  const mouseLeave = () => setHover(false);

  return (
    gone
      ? null
      : <li class= {dev ? 'list depdev-name' : 'list dep-name' }onMouseOver={mouseOver} onMouseLeave={mouseLeave}>
        {uninstalling
          ? <div class='spinner'></div>
          : <Fragment>
            {name}
            {hover ? <span class='uninstall' onClick={() => uninstall(setUninstalling, setGone, callback)}>uninstall</span> : null}
        </Fragment>}
      </li>
  );
};



export default DepList;
