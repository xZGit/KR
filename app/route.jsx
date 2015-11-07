"use strict";

import { Router, Route } from 'react-router';
import React, { PropTypes } from "react";
import Main  from './pages/main';
import Personal  from './pages/personal';
import NewStory  from './pages/newStory';


const Message = React.createClass({
    render() {
        return <h3>Message</h3>
    }
});

const Inbox = React.createClass({
    render() {
        return (
            <div>
                <h2>Inbox</h2>
                {/* Render the child route component */}
                {this.props.children || "Welcome to your Inbox"}
            </div>
        )
    }
});

const About = React.createClass({
    render() {
        return <h3>about</h3>
    }
});
require('./less/main.less');

// Declarative route configuration (could also load this config lazily
// instead, all you really need is a single root route, you don't need to
// colocate the entire config).
var routes = (
    <Router>
        <Route path="/" component={Main}>
            <Route path="personal/:userId" component={Personal} />
            <Route path="newStory" component={NewStory} />
                {/* Add the route, nested where we want the UI to nest */}
                <Route path="messages/:id" component={Message} />
        </Route>
    </Router>
);



export default routes;