/**
 * Created by xx on 15/9/28.
 */

import React from 'react';
import { Router, Route, Link } from 'react-router';
import Surface from './surface';
import Navbar from './navbar';
import Header from './header'
console.log("aaa");


var App = React.createClass({

    render() {
        var bgUrl="https://cdn-images-1.medium.com/freeze/fit/c/1600/1280/gradv/29/81/30/0*ZqLLu-QZiSqLiV4h.jpeg";
        var headImg="https://cdn-images-1.medium.com/fit/c/120/120/1*G8MpQXgzgwK6PYjt4VVhfg.jpeg";
        var name="xunny";
        return (
        <div className="site-main">
            <Surface url={bgUrl}/>
            <div className="u-sizeFullHeight u-clearfix">
                <Navbar/>
                <div className="u-backgroundWhite u-foreground">
                   <Header name={name} headImg={headImg}/>

                        <div class="blockDivider ">
                            <a class="blockDivider-name">latest stories</a>
                            <a class="blockDivider-name">latest sss</a>
                        </div>


                        <div>




                        </div>

                    </div>
            {/*
             <ul>
             <li><Link to="/about">About</Link></li>
             <li><Link to="/inbox">Inbox</Link></li>
             </ul>
             next we replace `<Child>` with `this.props.children`
             the router will figure out the children for us
             */}
            {this.props.children}
          </div>
        </div>
    );
    }
});


export default App;