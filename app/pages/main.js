/**
 * Created by xx on 15/11/6.
 */

import React from 'react';
import { Router, Route, Link } from 'react-router';
import Navbar from '../components/navbar';
import Header from '../components/header';
import Articles from '../components/articles';
import MsgTip  from '../components/msgTip';


var Main= React.createClass({

    render() {

        return (
            <div className="site-main">
                <MsgTip/>
                <Navbar/>
                <ul>
                    <li><Link to="/personal/563433f47296a08e030d629b" activeClassName="active">Bob</Link></li>
                </ul>
                {this.props.children}
            </div>
        );
    }
});


export default Main;