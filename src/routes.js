import { Router } from 'express';
import { readDirs, exists, readFile } from './middlewares/fsreader';

const router = Router();

router.get('/dirs', readDirs);
router.get('/exists', exists);
router.get('/readfile', readFile);

export default router;
