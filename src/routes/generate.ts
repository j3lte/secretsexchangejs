'use strict';

// Test routes
import { Router } from 'express';
import { generate } from '../controllers/store';

let router = Router();
router.get('/generate', generate);

export = router;
