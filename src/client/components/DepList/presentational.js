import { h } from 'preact';
import './style.css';

const DepList = ({ deps }) => {
  return (
    <ul>
      {deps.map(d => <li class='depname'>{d}</li>)}
    </ul>
  );
};

export default DepList;
