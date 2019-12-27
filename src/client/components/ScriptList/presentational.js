import _ from "underscore";
import { h, Fragment } from "preact";
import { useState } from "preact/hooks";
import api from '../../api';
import "./style.css";

const ScriptEntry = ({ name, cwd, script, callback }) => {
  const [alive, setAlive] = useState(true);
  const kill = () => setAlive(false);
  const scriptEditedHandler = () => { };
  const deleteHandler = () => { api.deleteScript(cwd, name).then(kill()) };
  if (!alive) return null;
  return (
    <li class='script-entry' onClick={callback} >
      <div class='script-name'>{name}</div>
      <div class='script-action'>
        <button>Edit</button>
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
      <h1 style={{ display: 'inline' }}>{currentCmd ? currentCmd : 'Scripts'}</h1>
      <span class='script-bubble'>{currentCmd ? scripts[currentCmd] : 'select script'}</span>
      <ul class="scriptlist">
        {_.keys(scripts).map(script => (
          <ScriptEntry name={script}
            command={scripts[script]}
            cwd={path}
            callback={() => setCmd(script)}
          />
        ))}
      </ul>
    </div>
  );
};

export default ScriptList;
