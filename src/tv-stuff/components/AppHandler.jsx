/* @flow */

import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import ErrorHandler from 'tv-stuff/components/ErrorHandler';
import MainPage from 'tv-stuff/components/MainPage';


export default (): React.Element<any> => {
    return <BrowserRouter>
        <Route
            path="/"
            render={(props: Object): React.Element<any> => {
                return <div>
                    <h1>tv-stuff</h1>
                    <Route exact path="/" component={MainPage} />
                    
                    <Route component={ErrorHandler}/>
                </div>;
            }}
        />
    </BrowserRouter>;
};


