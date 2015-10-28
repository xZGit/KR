/**
 * Created by xx on 15/9/28.
 */

import React from 'react';
import { Router, Route, Link } from 'react-router';
import Surface from './surface';
import Navbar from './navbar';
import Header from './header';
import Articles from './articles';


var App = React.createClass({

    render() {
        var bgUrl="https://cdn-images-1.medium.com/freeze/fit/c/1600/1280/gradv/29/81/30/0*ZqLLu-QZiSqLiV4h.jpeg";
        var headImg="https://cdn-images-1.medium.com/fit/c/120/120/1*G8MpQXgzgwK6PYjt4VVhfg.jpeg";
        var name="xunny";
        return (
        <div className="site-main">
            <Navbar/>
            <Surface url={bgUrl}/>
            <Header name={name} headImg={headImg}/>

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