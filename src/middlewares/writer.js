import { execSync } from "child_process";

const getInstallCommand = (pkg, dev) => {
  let command = `npm install ${pkg} --save`;
  return dev ? command + "-dev" : command;
};

const install = (req, res, next) => {
  const { path, pkg, dev } = req.body;

  const command = getInstallCommand(pkg, dev);

  process.chdir(path);
  try {
    execSync(command, { encoding: "utf-8" });
  } catch (error) {
    return res.error(error);
  }

  return res.end();
};

const uninstall = (req, res, next) => {
  const { path, pkg } = req.body;
  const command = `npm uninstall ${pkg} --save`;

  process.chdir(path);
  try {
    execSync(command, { encoding: "utf-8" });
  } catch (error) {
    return res.error(error);
  }

  return res.end();
};

export { install, uninstall };
