/**
 * Created by xx on 15/6/4.
 */


"use strict";
var stats = require("../../build/stats.json");

var publicPath = stats.publicPath;

var STYLE_URL;
var SCRIPT_URL_APP = publicPath + [].concat(stats.assetsByChunkName.app)[0];
if (process.env.NODE_ENV === "production") {
    STYLE_URL = (publicPath + [].concat(stats.assetsByChunkName.app)[1] +"?" + stats.hash);
    SCRIPT_URL_APP += "?" + stats.hash;
}

exports.index = function *() {
    this.body = yield this.render({
        version: stats.appVersion,
        commit: stats.appCommit,
        STYLE_URL: STYLE_URL,
        SCRIPT_URL: SCRIPT_URL_APP,
    }, "basic");
};





exports.getArticles = function *() {
    this.body ={articles:[{
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
    ]};
};