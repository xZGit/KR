/**
 * Created by xx on 15/10/20.
 */


"use strict";

import React, { PropTypes } from 'react';
import Article from './article';
import Request from '../mixins/request';


var Articles = React.createClass({

    getInitialState: function() {
        return {
            articles: [],
        };
    },

    componentDidMount: function() {
        Request.get("/articles", (err, res) => {
            this.setState({ articles: res.body.articles });
        });
    },


    getRows() {
        return( this.state.articles.map((item) => {
                console.log(item);
                return (<Article key={item.id} article={item} />);
            }))
       },


    render() {

        return (
            <div className="article-div-main">
                {this.getRows()}
            </div>


        );
    }
});


export default Articles;