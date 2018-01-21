/* @flow */

import {
    MapSchema,
    ListSchema,
    EntitySchema,
} from 'enty';

var RssSchema = EntitySchema('rss').define(MapSchema({}));
export default MapSchema({
    rss: RssSchema
});
