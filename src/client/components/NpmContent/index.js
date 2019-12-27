import { h, Fragment } from "preact";
import { useState, useEffect } from "preact/hooks";
import api from "../../api";
import DepList from "../DepList";
import ScriptList from "../ScriptList";
import NotNpm from "./NotNpm";
import "./style.css";

const NpmContentContainer = ({ path, onProjectCreation }) => {
  const [hasPkgJson, setPkgJson] = useState(false);

  useEffect(async () => fetchPkgJson(), [path]);

  const fetchPkgJson = async () => {
    setPkgJson(await api.hasPkgJson(path));
  };

  const projectCreationHandler = async name => {
    await api.newProject(name, path);
    await fetchPkgJson();
    await onProjectCreation(name, path);
  };

  return (
    <div class="npm-content-container">
      {hasPkgJson
        ? <Fragment>
          <ScriptList path={path} />
          <DepList path={path} />
        </Fragment>
        : <NotNpm path={path} onProjectCreation={projectCreationHandler} />}
    </div>
  );
};

export default NpmContentContainer;
