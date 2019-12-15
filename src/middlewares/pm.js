import Datastore from 'nedb-promises'
import { exec } from 'child_process'
const datastore = Datastore.create('pm.db')

export const getProjects = async (req, res, next) => {
  const data = await datastore.find()
  res.json(data)
}

export const newProject = async (req, res, next) => {
  const {name, path} = req.body;
  try {
    await datastore.insert({
      name,
      path
    });
    exec('npm init -y', {cwd: path},(err, stdout, stderr) => {
      if (err) {
        return;
      }
      res.sendStatus(201)
    })
  } catch (err) {
    res.sendStatus(400)
  } 
}

export const removeProject = async (req, res, next) => {
  const {name} = req.body;
  try {
    await datastore.remove({name})
    res.sendStatus(200)
  } catch (err) {
    res.sendStatus(400)
  }
}