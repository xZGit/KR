"use strict";

import React, { PropTypes } from 'react';
import Sign from './sign';
import AuthStore from '../stores/auth';

var Navbar = React.createClass({

    getInitialState: function() {
        return {
            user: null,
            showSign: false
        };
    },

    componentWillMount() {
        AuthStore.init();
    },

    componentDidMount() {
        AuthStore.addChangeListener(this.updateUser);
    },

    componentWillUnmount() {
        AuthStore.removeChangeListener(this.updateUser);
    },

    updateUser(){
        this.handleCloseSign();
        this.setState({user:AuthStore.getUser()});
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
   if(this.state.user){
       return   <div className="nav-div-top">
           <div className="nav-div-right">
               <div className="nav-div-innerLeft">
                   <input className="nav-input-text"
                          type="search" placeholder="Search Medium"/>
               </div>
               <div className="nav-div-innerRight">
                   <a className="nav-btn-right nav-btn-margin">Write a story</a>
                   <a className="nav-btn-right" onClick={this.handleSignClick}>{this.state.user.nickname}</a>
               </div>
           </div>
       </div>

   }
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
