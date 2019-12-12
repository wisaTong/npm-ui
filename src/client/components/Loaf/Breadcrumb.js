import { h } from 'preact';
import _ from 'underscore';
import './style.css';

function pathReduce(memo, dir) {
  const last = _.last(memo) ? _.last(memo) : '';
  const path = last + '/' + dir;
  return memo.concat([path]);
}

const Breadcrumb = ({ path, callback }) => {
  const dirs = _.rest(path.split('/'));
  const paths = _.reduce(dirs, pathReduce, []);

  return (
    <div class='breadcrumb-holder'>
      <Bread pathToDir='/' callback={callback} />
      {paths.map(d => <Bread pathToDir={d} callback={callback} />)}
    </div>
  )
};

const Bread = ({ pathToDir, callback }) => {
  return (
    <div class='breadcrumb' onClick={() => callback(pathToDir)}>
      <h1>{_.last(pathToDir.split('/'))}</h1>
    </div>
  );
}

export default Breadcrumb;
