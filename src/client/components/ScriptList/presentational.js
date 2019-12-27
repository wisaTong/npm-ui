import _ from "underscore";
import { h, Fragment } from "preact";
import { useState } from "preact/hooks";
import api from '../../api';
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
  const { scripts } = pkgJson;
  return (
    <div class="scriptlist-holder">
      <h1 style={{ display: 'inline' }}>{currentCmd ? currentCmd.name : 'Scripts'}</h1>
      <span class='script-bubble'>{currentCmd ? currentCmd.script : 'select script'}</span>
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
