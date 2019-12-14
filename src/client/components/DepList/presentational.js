import _ from 'underscore';
import { h } from 'preact';
import './style.css';

const DepList = ({ pkgJson }) => {
  const { dependencies, devDependencies } = pkgJson;
  return (
    <div class='deplist-holder'>
      <ul class='deplist'>
        {_.keys(dependencies).map(d => <li class='list dep-name'>{d}</li>)}
      </ul>
      <ul class='deplist'>
        {_.keys(devDependencies).map(d => <li class='list depdev-name'>{d}</li>)}
      </ul>
    </div>
  );
};

export default DepList;
