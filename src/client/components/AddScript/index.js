import { h } from 'preact';
import { useState } from 'preact/hooks';
import api from '../../api';
import './style.css';

const AddScript = ({ path }) => {
  const [name, setName] = useState(null);
  const [script, setScript] = useState(null);
  const handleAdd = () => { api.addScript(path, name, script) };
  return (
    <div class='add-script-holder'>
      <div class='add-script-input'>
        <input class='add-name' onInput={(e) => setName(e.target.value)} placeholder='name'></input>
        <input class='add-script' onInput={(e) => setScript(e.target.value)} placeholder='some command --here'></input>
      </div>
      <button onClick={handleAdd}>Add</button>
    </div>
  );
};

export default AddScript;
