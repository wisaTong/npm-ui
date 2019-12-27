import _ from "underscore";
import { h } from "preact";
import { useState } from "preact/hooks";
import api from '../../api';
import AddScript from '../AddScript';
import "./style.css";

const ScriptEntry = ({ name, cwd, command, callback }) => {
  const [sScript, setScript] = useState(command);
  const [alive, setAlive] = useState(true);
  const kill = () => setAlive(false);
  const editeHandler = () => {
    const newScript = prompt('Enter new script', command);
    if (newScript != null && newScript != '') {
      api.editScript(cwd, name, newScript).then(setScript(newScript));
    }
  };
  const deleteHandler = () => { api.deleteScript(cwd, name).then(kill()) };
  if (!alive) return null;
  return (
    <li class='script-entry' onClick={() => callback({ name, script: sScript })} >
      <div class='script-name'>{name}</div>
      <div class='script-action'>
        <button onClick={editeHandler}>Edit</button>
        <button onClick={deleteHandler}>Delete</button>
      </div>
    </li>
  );
};

const ScriptList = ({ pkgJson, path }) => {
  const [currentCmd, setCmd] = useState(null);
  const [scripts, setScripts] = useState(pkgJson.scripts);
  const addScript = (prev) => (name, cmd) => {
    const copy = JSON.parse(JSON.stringify(prev));
    copy[name] = cmd;
    setScripts(copy);
  }

  return (
    <div class="scriptlist-holder">
      <div class='scriptlist-header'>
        <h1 style={{ display: 'inline' }}>{currentCmd ? currentCmd.name : 'Scripts'}</h1>
        <span class='script-bubble'>{currentCmd ? currentCmd.script : 'select script'}</span>
      </div>
      <AddScript path={path} callback={addScript(scripts)}></AddScript>
      <ul class="scriptlist">
        {_.keys(scripts).map(script => (
          <ScriptEntry name={script}
            command={scripts[script]}
            cwd={path}
            callback={(s) => setCmd(s)}
          />
        ))}
      </ul>
    </div>
  );
};

export default ScriptList;
