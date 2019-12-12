import _ from 'underscore';
import fs from 'fs';
import { join } from 'path';

const isDirectory = source => fs.lstatSync(source).isDirectory();
const isNotHidden = source => _.last(source.split('/'))[0] !== '.';

const getDirectories = source => {
  return fs.readdirSync(source)
    .map(name => join(source, name))
    .filter(isDirectory)
    .filter(isNotHidden);
}

export const readDirs = (req, res, next) => {
  const path = req.query.path ? req.query.path : process.cwd();
  const dirs = getDirectories(path);
  return res.json({ path, dirs });
};

export const exists = (req, res, next) => {
  const { path } = req.query;
  return res.json(fs.existsSync(path));
}

export const readFile = (req, res, next) => {
  const { path } = req.query;
  return res.json(JSON.parse(fs.readFileSync(path, { encoding: 'utf-8' })));
}
