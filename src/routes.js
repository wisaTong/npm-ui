import { Router } from 'express';
import readDirs from './middlewares/fsreader';

const router = Router();

router.get('/dirs', readDirs);

export default router;
