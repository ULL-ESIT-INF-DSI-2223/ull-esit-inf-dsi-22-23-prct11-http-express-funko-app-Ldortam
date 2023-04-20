import request from 'request';
import 'mocha';
import { expect } from 'chai';

describe('tests', () => {
    it('Constructor', () => {
        request({url: __dirname, json: true}, (error: Error, response) => {
            if (error) {
              console.log(error);
            } else {
              console.log(response.body);
            }
          });

    })
})