"use strict";

import { Router, Route } from 'react-router';
import React, { PropTypes } from "react";
import App  from './components/app';





require('./less/main.less');

// Declarative route configuration (could also load this config lazily
// instead, all you really need is a single root route, you don't need to
// colocate the entire config).
var routes = (
    <Router>
        <Route path="/" component={App}>
        </Route>
    </Router>
);



export default routes;