import { h } from 'preact';

const DepList = ({ deps }) => {
  return (
    <ul>
      {deps.map(d => <li>{d}</li>)}
    </ul>
  );
};

export default DepList;
