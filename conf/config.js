/**
 * Created by xx on 15/7/30.
 */



process.env.NODE_ENV = (process.env.NODE_ENV || 'development').trim();

import path     from 'path';

const config = new Map();

config.set('env',process.env.NODE_ENV);
config.set('server_host',  'localhost');
config.set('server_port',  process.env.PORT || 3000);
config.set('root', path.resolve(__dirname, '../'));
config.set('key','kr');
config.set('mongoUrl',"mongodb://ddexpertAdmin:sdhz123@ds047782.mongolab.com:47782/ddexpert");


const paths = (() => {
    const base    = [config.get('root')],
        resolve = path.resolve;

    const project = (...args) => resolve.apply(resolve, [...base, ...args]);

    return {
        project : project
    };
})();

config.set('utils_paths', paths);


export default config;
//"use strict";
//var path = require("path");
//var _ = require("lodash");
//
//var env = process.env.NODE_ENV = process.env.NODE_ENV || "development";
//
//var base = {
//    app: {
//        root: path.normalize(path.join(__dirname, "/..")),
//        env: env,
//        //wechat info
//        appId: "your wechat appid ",
//        appsecret:"your app secret",
//        redirectUrl: "",
//        scope: "snsapi_userinfo",
//        state: "",
//
//        //
//        rate: 0.4
//    },
//};
//
//
//var specific = {
//    development: {
//        app: {
//            port: 3000,
//            name: "cst - Dev",
//            keys: ["super-secret-hurr-durr"],
//        },
//        mongo: {
//            url: "mongodb://ddexpertAdmin:sdhz123@ds047782.mongolab.com:47782/ddexpert",
//        },
//    },
//    test: {
//        app: {
//            port: 3001,
//            name: "cst - Test realm",
//            keys: ["super-secret-hurr-durr"],
//        },
//        mongo: {
//            url: "mongodb://localhost/cst_test",
//        },
//    },
//    production: {
//        app: {
//            port: process.env.PORT || 3000,
//            name: "cst",
//        },
//        mongo: {
//            url: "mongodb://localhost/cst",
//        },
//    },
//};
//
//
//module.exports = _.merge(base, specific[env]);