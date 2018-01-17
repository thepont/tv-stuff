/* @flow */

import {
    MapSchema,
    ListSchema,
    EntitySchema,
} from 'enty';

var RssSchema = EntitySchema('rss');
export default MapSchema({
    rss: RssSchema
});
