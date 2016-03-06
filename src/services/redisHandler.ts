/// <reference path="../../typings/tsd.d.ts" />

import { createClient, RedisClient } from 'redis';

'use strict';

export default class Redis {
    client: RedisClient;
    prefix: string;

    constructor() {
        this.client = createClient();
        this.prefix = 'SecretSexChange_';
    }

    store(key: String, value: string) {
        this.client.set(this.prefix + key, value);
    }

    get(key: string, cb: Function) {
        let k = this.prefix + key;
        this.client.get(k, (err: any, res: String) => {
            if (err) {
                return cb(err);
            }
            this.client.del(k);
            return cb(null, res);
        });
    }
};
