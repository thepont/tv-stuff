/* @flow */
var parser = require('rss-parser');

import {createAction} from 'redux-actions';
import {createEntityQuery} from 'enty';
import request from 'tv-stuff/util/request';

const ENTITY_FETCH = 'ENTITY_FETCH';
const ENTITY_RECEIVE = 'ENTITY_RECEIVE';
const ENTITY_ERROR = 'ENTITY_ERROR';

const payloadCreator = payload => payload;
const metaCreator = (payload, meta) => meta;

const entityFetch = createAction(ENTITY_FETCH, payloadCreator, metaCreator);
const entityReceive = createAction(ENTITY_RECEIVE, payloadCreator, metaCreator);
const entityError = createAction(ENTITY_ERROR, payloadCreator, metaCreator);

function fetchGraphQL(url: string, query: Object): Promise<any> {
    return request(url, {
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        mode: 'cors',
        method: 'POST',
        body: JSON.stringify(query)
    });
}

function getRss(url){
    return new Promise((resolve, reject) => {
        parser.parseURL(url, (err, result)=> {
            if(err) return reject(err);
            return resolve(result);
        })
    })
}

export const rssRequestAction = (
    payload: {url: string},
    meta: {resultKey: number}
): Function => {
    return (dispatch: Function) => {
        console.log('HERE123')
        // Don't try to make queries on server/prerender
        if(typeof window === 'undefined') return;
        dispatch(entityFetch(null, meta));
        getRss(url)
            .then(data => dispatch(entityReceive({rss: data.feed}, meta)))
            .catch(err => dispatch(entityError(err, meta)));
    };
};


export default createEntityQuery(rssRequestAction);
