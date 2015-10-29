"use strict";

import React, { PropTypes } from 'react';
import Sign from './sign';

var Navbar = React.createClass({

    getInitialState: function() {
        return {
            isLogin: false,
            showSign: false
        };
    },


    handleSignClick(){
        this.setState({showSign:true});
    },

    handleCloseSign(){
        this.setState({showSign:false});
    },

    showSignFunc(){
        if(!this.state.showSign){
            return;
        }
        return <Sign handleClose={this.handleCloseSign}/>
    },


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
                <a className="nav-btn-right" onClick={this.handleSignClick}>Sign in / Sign up</a>
            </div>
        </div>

        {this.showSignFunc()}
    </div>


);
}
});


export default Navbar;
