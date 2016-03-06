'use strict';

// Test routes
import { Router } from 'express';
import { create } from '../controllers/store';

let router = Router();
router.post('/create', create);

export = router;
