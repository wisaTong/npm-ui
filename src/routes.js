import { Router } from 'express';
import { readDirs, exists, readFile } from './middlewares/reader';
import { install, uninstall } from './middlewares/writer';

const router = Router();

router.get('/dirs', readDirs);
router.get('/exists', exists);
router.get('/readfile', readFile);

router.post('/install', install);
router.delete('/uninstall', uninstall);

export default router;
