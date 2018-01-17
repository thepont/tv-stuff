/* @flow */
import {Record, fromJS} from 'immutable';
import UserRecord from 'tv-stuff/entity/user/UserRecord';

export default function(value: Map<string, any>, key: string): Record<*> | Map<string, any> {
    console.log('Hello World')
    switch(key) {
        case 'rss':
            return fromJS(value);
        case 'viewer':
            return new UserRecord(value);
        default:
            return value;
    }
}