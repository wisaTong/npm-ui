import _ from "underscore";
import { h, Fragment } from "preact";
import "./style.css";
import { useEffect, useState } from "preact/hooks";

const ScriptEntry = ({ name, command }) => {
  const [editing, setEditing] = useState(false);
  const scriptEditedHandler = () => {};
  return (
    <div class="script-entry">
      <div class="script-label">
        {editing ? (
          <div class="script-edit">
            <input type="text" placeholder="Script Name" value={name} />
          </div>
        ) : (
          <span>{name}</span>
        )}
      </div>
      <div class="script-actions">
        {editing ? (
          <button class="script-action" onClick={scriptEditedHandler}>
            Done
          </button>
        ) : (
          <button class="script-action" onClick={() => setEditing(true)}>
            Edit
          </button>
        )}
        <button class="script-action">Delete</button>
      </div>
    </div>
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
