/// <reference path="../../typings/tsd.d.ts" />

import { Request, Response } from 'express';

/**
 * Example controller that provides a healthcheck endpoint
 */
module IndexController {

  'use strict';

  /*
   * Return an empty 200 response
   */
  export function index (req: Request, res: Response) {
    res.render('index');
  }

}

export = IndexController;
