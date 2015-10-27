/**
 * Created by xx on 15/10/21.
 */


"use strict";

import React, { PropTypes } from 'react';
import AuthorBar from './AuthorBar';

var Article = React.createClass({


    article: React.PropTypes.shape({
        id: React.PropTypes.string.isRequired,
        author: React.PropTypes.string.isRequired,
        headImg: React.PropTypes.string.isRequired,
        title: React.PropTypes.string.isRequired,
        create_time: React.PropTypes.string.isRequired,
        introduce: React.PropTypes.string.isRequired
    }).isRequired,

    render() {

        return (
            <div className="article-div-signle">
                <AuthorBar author={this.props.article.author} headImg={this.props.article.headImg} create_time={this.props.article.create_time} />
                <div>
                    <div><h1 className="title-h">{this.props.article.title}</h1></div>
                    <div><h1 className="">{this.props.article.introduce}</h1></div>
                </div>
                <hr className="article-hr"/>
            </div>

        );
    }
});


export default Article;