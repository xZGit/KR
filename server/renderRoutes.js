/**
 * Created by xx on 15/10/14.
 */

import fs from 'fs';
import { renderToString } from 'react-dom/server';
import { match, RoutingContext } from 'react-router';
import routes from '../app/route';
import React from 'react';
import config from '../conf/config';


const paths = config.get('utils_paths');
//
const template = fs.readFileSync(paths.project('server/views/basic.html'), 'utf-8')
    .replace(
    '<div id="root"></div>',
    [
        '<div id="root">${content}</div>',
    ].join('')
);


function renderIntoTemplate (template, content) {
    return template
        .replace('${content}', content);
}



var render = function (app) {

    app.use(function *() {

        match({routes, location: this.request.url}, (error, redirectLocation, renderProps) => {
            if (error) {
                this.throw(500);
            } else if (redirectLocation) {
                this.redirect(302, redirectLocation.pathname + redirectLocation.search)
            } else if (renderProps) {
                var markup = renderToString(<RoutingContext {...renderProps} />);
                this.body = renderIntoTemplate(template, markup);
            } else {
                console.log("404");
            }
        })
    });


};
export default render;