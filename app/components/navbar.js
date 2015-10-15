"use strict";

import React, { PropTypes } from 'react';



var Navbar = React.createClass({

  render() {

    return (
          <nav className="metabar u-clearfix  metabar--top">
            <div className="metabar-right u-floatRight">
               <div className="inputGroup">
                <input className=" textInput textInput--rounded textInput--dark"
                       type="search" placeholder="Search Medium"/>
                </div>
                <div className="button-set">
                  <a className="button ">Write a story</a>
                  <a className="button button--primary">Sign in / Sign up</a>
                </div>
                 </div>
           </nav>
    );
  }
});


export default Navbar;
