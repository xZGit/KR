/**
 * Created by xx on 15/10/20.
 */


"use strict";

import React, { PropTypes } from 'react';
import Article from './article';
import Request from '../common/request';
import {ScrollBlocker, ScrollListenerMixin}  from 'react-scroll-components';



var Articles = React.createClass({
    mixins: [ScrollListenerMixin],
    getInitialState: function() {
        return {
            articles: [],
        };
    },

    getArticles: function(){
        //Request.get("/articles", (err, res) => {
        //    this.setState({ articles: this.state.articles.concat(res.body.articles),
        //    });
        //});
    },
    componentDidMount: function() {
      this.getArticles();
    },
    onPageScrollEnd:function(){
      this.getArticles();
    },

    getRows() {
        return( this.state.articles.map((item) => {
                console.log(item);
                return (<Article key={item.id} article={item} />);
            }))
       },
    loadMore: function (page) {
        console.log('load');
        setTimeout(this.getArticles(),1000);
    },

    render() {

        return (
                <div className="article-div-main">
                    <ScrollBlocker active={this.state.isScrolling}>
                        The current scroll position is {this.state.scrollTop}.<br />
                        The document is currently {this.state.isScrolling ? '' : 'not'} scrolling.
                        {this.getRows()}
                    </ScrollBlocker>

            </div>


        );
    }
});


export default Articles;