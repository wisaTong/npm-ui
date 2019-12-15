import Datastore from 'nedb-promises'
const datastore = Datastore.create('/pm.db')

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
    res.sendStatus(201)
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