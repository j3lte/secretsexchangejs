/// <reference path="../../typings/tsd.d.ts" />

// Error handler service

module SecretHandler {

  'use strict';

  export function randomString (length: Number) {
      const len = length || 32;
      const possible = 'abcdefghijklmnopqrstuvwxyz0123456789';
      let str = [];

      for (let i = 0; i < len; i++) {
          str.push(possible.charAt(Math.floor(Math.random() * possible.length)));
      }

      return str.join('');
  };

}

export = SecretHandler;
