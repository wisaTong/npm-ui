import _ from "underscore";
import { h, Fragment } from "preact";
import { useState } from "preact/hooks";
import api from '../../api';
import "./style.css";

const ScriptEntry = ({ name, cwd }) => {
  const [editing, setEditing] = useState(false);
  const scriptEditedHandler = () => { };
  const deleteHandler = () => { api.deleteScript(cwd, name) };
  return (
    <li class='script-entry'>
      <div class='script-name'>{name}</div>
      <div class='script-action'>
        <button>Edit</button>
        <button onClick={deleteHandler}>Delete</button>
      </div>
    </li>
  );
};

const ScriptList = ({ pkgJson, path }) => {
  const { scripts } = pkgJson;
  console.log(path);
  return (
    <div class="scriptlist-holder">
      <h1>Scripts</h1>
      <ul class="scriptlist">
        {_.keys(scripts).map(script => (
          <ScriptEntry name={script} command={scripts[script]} cwd={path}/>
        ))}
      </ul>
    </div>
  );
};

export default ScriptList;
