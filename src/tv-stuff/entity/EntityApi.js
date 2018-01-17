// entity/EntityApi.js
var parser = require('rss-parser');

import {EntityApi} from 'enty';
import ApplicationSchema from './EntitySchema';

function getRss(url){
    return new Promise((resolve, reject) => {
        parser.parseURL(url, (err, result)=> {
            if(err) return reject(err);
            return resolve(result);
        })
    })
}

const Api = EntityApi(ApplicationSchema, {
    core: payload => getRss(payload)
});

export const {
    EntityStore,
    CoreQueryHock,
    CoreMutationHock,
} = Api;