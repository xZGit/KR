"use strict";

import React, { PropTypes } from 'react';



var Navbar = React.createClass({

  render() {

return (
    <div className="nav-div-top">
        <div className="nav-div-right">
            <div className="nav-div-innerLeft">
                <input className="nav-input-text"
                       type="search" placeholder="Search Medium"/>
            </div>
            <div className="nav-div-innerRight">
                <a className="nav-btn-right nav-btn-margin">Write a story</a>
                <a className="nav-btn-right">Sign in / Sign up</a>
            </div>
        </div>
    </div>
);
}
});


export default Navbar;
