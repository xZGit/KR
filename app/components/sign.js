/**
 * Created by xx on 15/10/29.
 */



import React, { PropTypes } from 'react';



var Sign = React.createClass({

    propTypes: {
      handleClose: React.PropTypes.func.isRequired
    },
    getInitialState: function() {
        return {email: '',
                pass:''};
    },
    handleEmailChange: function(event) {
        this.setState({email: event.target.value});
    },

    handlePassChange: function(event) {
        this.setState({pass: event.target.value});
    },

    handleCloseClick: function(){
        this.props.handleClose();
    },
    handleLoginClick: function(){
        console.log(this.state);
    },
    render() {
        var email = this.state.email;
        var pass = this.state.pass;
        return (
            <div className="sign-div-top">
                <div className="sign-div-close" onClick={this.handleCloseClick}>x</div>
                <div className="sign-div-mid">
                     <h3>登录</h3>
                    <div ><label>邮箱:</label><input value={email} onChange={this.handleEmailChange} /></div>
                    <div ><label>密码:</label><input type="password" value={pass}  onChange={this.handlePassChange} /></div>
                    <a className="nav-btn-right nav-btn-margin"  onClick={this.handleLoginClick}>登录</a>
                </div>
            </div>

        );
    }
});


export default Sign;