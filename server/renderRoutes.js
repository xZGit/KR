/**
 * Created by xx on 15/10/14.
 */

import { renderToString } from 'react-dom/server';
import { match, RoutingContext } from 'react-router';
import routes from '../app/route';
import React from "react";

//
var render = function (app) {

    app.use(function *() {

        match({routes, location: this.request.url}, (error, redirectLocation, renderProps) => {
            if (error) {
                this.throw(500);
            } else if (redirectLocation) {
                this.redirect(302, redirectLocation.pathname + redirectLocation.search)
            } else if (renderProps) {
                this.body = renderToString(<RoutingContext {...renderProps} />);
            } else {
                console.log("404");
            }
        })
    });


};
export default render;