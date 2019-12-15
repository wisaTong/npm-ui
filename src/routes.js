import { Router } from 'express';
import { readDirs, exists, readFile } from './middlewares/reader';
import { install, uninstall } from './middlewares/writer';
import { getProjects, newProject, removeProject } from './middlewares/pm'

const router = Router();

router.get('/dirs', readDirs);
router.get('/exists', exists);
router.get('/readfile', readFile);

router.post('/install', install);
router.delete('/uninstall', uninstall);

router.route('/projects').get(getProjects).post(newProject).delete(removeProject)

export default router;
