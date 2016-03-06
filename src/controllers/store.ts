/// <reference path="../../typings/tsd.d.ts" />

import { Request, Response } from 'express';
import { randomString } from '../services/secretHandler';
import Redis from '../services/redisHandler';

let r = new Redis;

/**
 * Example controller that provides a healthcheck endpoint
 */
module StoreController {
    'use strict';

    export function create (req: Request, res: Response) {
        let generated = false;
        let key = randomString(50);
        let secret = null;

        if (!req.body.secret) {
            console.log('generate');
            generated = true;
            secret = randomString(20);
        } else {
            console.log('create');
            secret = req.body.secret;
        }

        r.store(key, secret);

        let secret_url = req.headers['host'] + '/get/' + key;

        if (generated) {
            console.log('generated');
            res.render('generate', { generated: secret, secret_url: secret_url});
        } else {
            console.log('created');
            res.render('created', { url: secret_url });
        }
    }

    export function generate (req: Request, res: Response) {
        let key = randomString(50);
        let secret = randomString(20);
        let secret_url = req.headers['host'] + '/get/' + key;

        r.store(key, secret);
        res.render('generate', { generated: secret, secret_url: secret_url });
    }

    export function get (req: Request, res: Response) {
        let key = req.params['key'];
        console.log(key);
        if (key) {
            r.get(key, (err, result) => {
                let secret = false;
                if (err) {
                    console.log(err);
                } else {
                    secret = result;
                }
                res.render('get', { secret: secret });
            });
        } else {
            res.render('get', { secret: false });
        }

    }

}

export = StoreController;
