/**
 * Created by xx on 15/10/29.
 */



import React, { PropTypes } from 'react';
import AuthStore from '../stores/auth';
import AlertStore from '../stores/alert';

var Sign = React.createClass({

    propTypes: {
      handleClose: React.PropTypes.func.isRequired
    },
    getInitialState: function() {
        return {email: '',
                password:''};
    },
    handleStateChange: function(event) {
        var name = event.target.name;
        var newState = {};
        newState[name] = event.target.value;
        this.setState(newState);
    },


    handleCloseClick: function(){
        this.props.handleClose();
    },

    handleLoginClick: function(){
        AuthStore.signIn(this.state.email, this.state.password, function(err, res){
             if(res.body  && res.body.error){
                 AlertStore.showWarn(res.body.error);
             }
        })
    },


    render() {
        var email = this.state.email;
        var password = this.state.password;
        return (
            <div className="sign-div-top">
                <div className="sign-div-close" onClick={this.handleCloseClick}>x</div>
                <div className="sign-div-mid">
                     <h3>登录</h3>
                    <div ><label>邮箱:</label><input value={email} name="email" onChange={this.handleStateChange} /></div>
                    <div ><label>密码:</label><input type="password" value={password} name="password" onChange={this.handleStateChange} /></div>
                    <a className="nav-btn-right nav-btn-margin"  onClick={this.handleLoginClick}>登录</a>
                </div>
            </div>

        );
    }
});


export default Sign;