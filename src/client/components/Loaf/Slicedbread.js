import { h } from 'preact';
import _ from 'underscore';

const Slicedbread = ({ dirs, callback }) => {
  return (
    <ul class='dirs-holder'>
      {dirs.map(d => <li onClick={() => callback(d)}>{_.last(d.split('/'))}</li>)}
    </ul>
  );
}

export default Slicedbread;
