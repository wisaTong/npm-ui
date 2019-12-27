import _ from "underscore";
import { h, Fragment } from "preact";
import "./style.css";
import { useEffect } from "preact/hooks";

const ScriptEntry = ({ name, command }) => {
  return <div class="script-entry">{name}</div>;
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
