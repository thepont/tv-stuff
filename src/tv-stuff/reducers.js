/* @flow */

import {combineReducers} from 'redux';
import {createEntityReducer} from 'enty';
import EntitySchema from 'tv-stuff/entity/EntitySchema';
import EntityConstructor from 'tv-stuff/entity/EntityConstructor';

export default combineReducers({
    entity: createEntityReducer({
        schemaMap: {
            ENTITY_RECEIVE: EntitySchema
        },
        afterNormalize: EntityConstructor
    })
});

