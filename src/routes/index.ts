'use strict';

// Test routes
import { Router } from 'express';
import { index } from '../controllers/index';

let router = Router();
router.get('/', index);

export = router;
