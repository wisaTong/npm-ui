import _ from "underscore";
import { h, Fragment } from "preact";
import { useState } from "preact/hooks";
import api from '../../api';
import "./style.css";


const EditEntry = ({ name }) => {
  return (
    <Fragment>
      <input></input>
      <input></input>
    </Fragment>
  );
};

const NormalEntry = ({ name, callback }) => {
  return (
    <Fragment>
      {name}
      {/* <button onClick={callback} >Edit</button> */}
    </Fragment>
  );
}

const ScriptEntry = ({ name, command }) => {
  const [editing, setEditing] = useState(false);
  const scriptEditedHandler = () => { };
  return (
    <li class="script-entry">
      {editing
        ? <EditEntry name={name} />
        : <NormalEntry name={name} callback={() => setEditing(true)} />
      }
      {/* <div class="script-label">
        {editing
          ? <input type="text" placeholder="Script Name" value={name} />
          : <span>{name}</span>
        }
      </div>
      <div class="script-actions">
        {editing
          ? <button class="script-action" onClick={scriptEditedHandler}>Done</button>
          : <button class="script-action" onClick={() => setEditing(true)}>Edit</button>
        }
        <button class="script-action">Delete</button>
      </div> */}
    </li>
  );
};

const ScriptList = ({ pkgJson, path }) => {
  const { scripts } = pkgJson;

  return (
    <div class="scriptlist-holder">
      <h1>Scripts</h1>
      <ul class="scriptlist">
        {_.keys(scripts).map(script => (
          <ScriptEntry name={script} command={scripts[script]} />
        ))}
      </ul>
    </div>
  );
};

export default ScriptList;
