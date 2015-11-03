/**
 * Created by xx on 15/10/15.
 */



"use strict";

import React, { PropTypes } from 'react';
import Surface from './surface';
import Request from '../common/request'
import AuthStore from '../stores/auth';


var Header = React.createClass({

    propTypes: {
        id: React.PropTypes.string.isRequired
    },

    getInitialState: function() {
        return {
                bgUrl: '',
                name:'',
                introduce:'',
                headImg:''};
    },


    componentWillMount() {
        Request.get("userInfo/"+this.props.id, function(){
            console.log(arguments);
        })
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


    render() {
        var bgUrl="https://cdn-images-1.medium.com/freeze/fit/c/1600/1280/gradv/29/81/30/0*ZqLLu-QZiSqLiV4h.jpeg";
        var headImg="https://cdn-images-1.medium.com/fit/c/120/120/1*G8MpQXgzgwK6PYjt4VVhfg.jpeg";
        var name="xunny";

        return (
            <div>
            <Surface url={bgUrl}/>
            <div className="header-div-top">

                <div className="header-div-avatar">
                        <img src={headImg}
                              className="header-image" alt={name}/>
                    </div>
                    <h1 className="hero-title">{name}</h1>
                </div>
            </div>
           );
    }
});


export default Header;