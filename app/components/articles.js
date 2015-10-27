/**
 * Created by xx on 15/10/20.
 */


"use strict";

import React, { PropTypes } from 'react';
import Article from './article';

var Articles = React.createClass({

    getRows() {
        const  items =  [{
            id: 1,
            headImg:"https://cdn-images-1.medium.com/fit/c/120/120/1*G8MpQXgzgwK6PYjt4VVhfg.jpeg",
            author: "xunny",
            title: "love",
            create_time: "Sep 21",
            introduce:"I’ll look for it. I think it may be gone…. A great place to go is jobstobedone.org for more ( and better ) recorded interviews. This one is the best, newest one."
        },
            {
                id: 2,
                headImg:"https://cdn-images-1.medium.com/fit/c/120/120/1*G8MpQXgzgwK6PYjt4VVhfg.jpeg",
                author: "xunny",
                title: "love",
                create_time: "Sep 21",
                introduce:"I’ll look for it. I think it may be gone…. A great place to go is jobstobedone.org for more ( and better ) recorded interviews. This one is the best, newest one."
            },
            {
                id: 3,
                headImg:"https://cdn-images-1.medium.com/fit/c/120/120/1*G8MpQXgzgwK6PYjt4VVhfg.jpeg",
                author: "xunny",
                title: "love",
                create_time: "Sep 21",
                introduce:"I’ll look for it. I think it may be gone…. A great place to go is jobstobedone.org for more ( and better ) recorded interviews. This one is the best, newest one."
            },
            {
                id: 4,
                headImg:"https://cdn-images-1.medium.com/fit/c/120/120/1*G8MpQXgzgwK6PYjt4VVhfg.jpeg",
                author: "xunny",
                title: "love",
                create_time: "Sep 21",
                introduce:"I’ll look for it. I think it may be gone…. A great place to go is jobstobedone.org for more ( and better ) recorded interviews. This one is the best, newest one."
            },
            {
                id: 5,
                headImg:"https://cdn-images-1.medium.com/fit/c/120/120/1*G8MpQXgzgwK6PYjt4VVhfg.jpeg",
                author: "xunny",
                title: "love",
                create_time: "Sep 21",
                introduce:"I’ll look for it. I think it may be gone…. A great place to go is jobstobedone.org for more ( and better ) recorded interviews. This one is the best, newest one."
            },
        ];
        return( items.map((item) => {
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