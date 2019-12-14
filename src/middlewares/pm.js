import Datastore from 'nedb-promises'
const datastore = Datastore.create('/pm.db')

export const getProjects = () => {
  return datastore.find()
}

export const newProject = (title, path) => {
  return datastore.insert({
    title, path
  })
}

export const removeProject = (title) => {
  return datastore.remove({title})
}