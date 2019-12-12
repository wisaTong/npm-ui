import fs from 'fs';
import { join } from 'path';

const isDirectory = source => fs.lstatSync(source).isDirectory();

const getDirectories = source => {
  return fs.readdirSync(source)
    .map(name => join(source, name))
    .filter(isDirectory)
}

const readDirs = (req, res, next) => {
  const path = req.query.path ? req.query.path : process.cwd();
  const dirs = getDirectories(path);
  return res.json({ path, dirs });
};

export default readDirs;
