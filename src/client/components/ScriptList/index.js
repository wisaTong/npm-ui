import { h } from "preact";
import { useState, useEffect } from "preact/hooks";
import api from "../../api";
import ScriptList from "./presentational";

const ScriptListContainer = ({ path }) => {
  const [pkgJson, setPkgJson] = useState(null);

  useEffect(async () => setPkgJson(await api.pkgJsonContent(path)), []);

  return pkgJson && <ScriptList pkgJson={pkgJson} path={path} />;
};

export default ScriptListContainer;
