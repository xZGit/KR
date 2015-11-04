/**
 * Created by xx on 15/9/28.
 */

import React from 'react';
import { Router, Route, Link } from 'react-router';
import Navbar from './navbar';
import Header from './header';
import Articles from './articles';
import MsgTip  from './msgTip';


var App = React.createClass({

    render() {

        return (
        <div className="site-main">
            <MsgTip/>
            <Navbar/>
            <Header id="563433f47296a08e030d629b"/>
            <div className="menu">
                <Link className="link" to="/">latest stories</Link>
                <Link className="link" to="/about">latest photos</Link>
            </div>
            <div>

             {this.props.children || <Articles />}
             </div>
        </div>
    );
    }
});


export default App;