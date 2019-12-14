import _ from 'underscore';
import { h } from 'preact';
import './style.css';

const DepList = ({ pkgJson }) => {
  const { dependencies, devDependencies } = pkgJson;
  return (
    <div class='deplist-holder'>
      <h1>Dependecies</h1>
      <ul class='deplist'>
        {_.keys(dependencies).map(d => <li class='list dep-name'>{d}</li>)}
      </ul>
      <h1>Development Dependecies</h1>
      <ul class='deplist'>
        {_.keys(devDependencies).map(d => <li class='list depdev-name'>{d}</li>)}
      </ul>
    </div>
  );
};

export default DepList;
