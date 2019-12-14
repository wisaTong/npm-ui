import { h } from 'preact';
import _ from 'underscore';
import './style.css';

const Slicedbread = ({ dirs, callback }) => {
  return (
    <ul class='dirs-holder'>
      {dirs.map(d => <Slice path={d} callback={callback} />)}
    </ul>
  );
}

const Slice = ({ path, callback }) => {
  const dirName = _.last(path.split('/'));
  return (
    <li class='dirname' onClick={() => callback(path)}>{dirName}</li>
  );
};

export default Slicedbread;
