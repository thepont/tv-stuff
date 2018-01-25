// entity/EntityApi.js
var parser = require('rss-parser');

import {EntityApi} from 'enty';
import ApplicationSchema from './EntitySchema';

function getRss({url}){
    console.log('GetRss')
    return new Promise((resolve, reject) => {
        console.log('We are here')
        try{
            parser.parseURL(url, (err, result)=> {
                console.log(result);
                if(err) return reject(err);
                return resolve({rss: result});
            })
        } catch(err){
            console.error(err)
            throw err;
        }
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
