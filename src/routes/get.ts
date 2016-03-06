'use strict';

// Test routes
import { Router } from 'express';
import { get } from '../controllers/store';

let router = Router();
router.get('/get/', get);
router.get('/get/:key', get);

export = router;
