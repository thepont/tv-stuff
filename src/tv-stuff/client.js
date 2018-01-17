/* @flow */

// A fix for style-loader issue #96, #55, #124
if(process.env.NODE_ENV === 'development') {
    /* eslint-disable */
    __webpack_public_path__ = window.location.protocol + "//" + window.location.host + "/";
    /* eslint-enable */
}

import 'whatwg-fetch';
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {EntityStore} from 'tv-stuff/entity/EntityApi';
import AppHandler from 'tv-stuff/components/AppHandler';
import 'tv-stuff/meta';


// Needs to be required rather than imported for above fix to work
require('tv-stuff/sass/styles.scss');

ReactDOM.render(
    <Provider store={EntityStore}><AppHandler/></Provider>,
    document.getElementById('tv-stuff')
);


