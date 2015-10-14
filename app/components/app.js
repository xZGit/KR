/**
 * Created by xx on 15/9/28.
 */

import React from "react";
import { Router, Route, Link } from 'react-router'
console.log("aaa");

var App = React.createClass({
    render() {
        return (
            <div>
                <h1>App</h1>
                {/* change the <a>s to <Links>s */}
                <ul>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/inbox">Inbox</Link></li>
                </ul>

                {/*
                 next we replace `<Child>` with `this.props.children`
                 the router will figure out the children for us
                 */}
                {this.props.children}
            </div>
    );
    }
});


export default App;