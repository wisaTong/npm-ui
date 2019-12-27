import { writeFileSync } from "fs";

const addScript = (req, res, next) => {
  const { cwd, name, command } = req.body;
  const pkgJsonPath = `${cwd}/package.json`;
  const pkgJson = require(pkgJsonPath);
  pkgJson.scripts[name] = command;
  writeFileSync(pkgJsonPath, JSON.stringify(pkgJson, null, 2), { encoding: "utf8" });
  return res.end();
};

const deleteScript = (req, res, next) => {
  const { cwd, name } = req.body;
  const pkgJsonPath = `${cwd}/package.json`;
  const pkgJson = require(pkgJsonPath);
  delete pkgJson.scripts[name];
  writeFileSync(pkgJsonPath, JSON.stringify(pkgJson, null, 2), { encoding: "utf8" });
  return res.end();
};

const editScript = (req, res, next) => {
  const { cwd, name, command } = req.body;
  const pkgJsonPath = `${cwd}/package.json`;
  const pkgJson = require(pkgJsonPath);
  pkgJson.scripts[name] = command;
  writeFileSync(pkgJsonPath, JSON.stringify(pkgJson, null, 2), { encoding: "utf8" });
  return res.end();
};

export { addScript, deleteScript, editScript };
