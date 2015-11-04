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
                editStatus: false,
                loginUser:'',
                bgImg: '',
                name:'',
                introduce:'',
                headImg:''};
    },


    componentWillMount() {
        var ctx = this;
        Request.get("userInfo/"+this.props.id, function(err, res){
            if(res.body  && res.body.error){
                AlertStore.showWarn(res.body.error);
                return;
            }
            ctx.setState( {
                bgImg: res.body.data.bgImg,
                nickname:  res.body.data.nickname,
                introduce: res.body.data.introduce,
                headImg: res.body.data.headImg});

        })
    },


    componentDidMount() {
        AuthStore.addChangeListener(this.updateUser);
    },

    componentWillUnmount() {
        AuthStore.removeChangeListener(this.updateUser);
    },

    updateUser(){

        this.setState({loginUser:AuthStore.getUser()});
    },

    edit(){
        this.setState({editStatus:true});
    },
    isEditable(){
        if(this.state.loginUser && this.state.loginUser.id && this.state.loginUser.id === this.props.id){
            return <div className="header-div-edit"><a className="nav-btn-right nav-btn-margin header-div-edit" onClick={this.edit}>edit</a></div>
        }
    },

    render() {

       if(!this.state.editStatus){
        var bgImg = this.state.bgImg;
        var headImg = this.state.headImg;
        var nickname =  this.state.nickname;
        return (
            <div>
            <Surface url={bgImg}/>
            <div className="header-div-top">

                <div className="header-div-avatar">
                        <img src={headImg}
                              className="header-image" alt={nickname}/>
                    </div>
                    <h1 className="hero-title">{nickname}</h1>
                       {this.isEditable()}
                </div>

            </div>
           );
       }else{
           var bgImg = this.state.bgImg;
           var headImg = this.state.headImg;
           var nickname =  this.state.nickname;
           return (
               <div>
                   <Surface url={bgImg}/>
                   <div className="header-div-top">

                       <div className="header-div-avatar">
                           <img src={headImg}
                                className="header-image" alt={nickname}/>
                       </div>
                       <h1 className="hero-title">{nickname}</h1>
                       <div className="header-div-edit">
                           <a className="nav-btn-right nav-btn-margin header-div-edit" onClick={this.edit}>save</a>
                           <a className="nav-btn-right nav-btn-margin header-div-edit" onClick={this.edit}>cancle</a>
                       </div>
                   </div>

               </div>
           );
       }
    }

});


export default Header;