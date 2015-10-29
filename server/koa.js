"use strict";
var path = require("path");
var serve = require("koa-static-cache");
var session = require("koa-generic-session");
var MongoStore = require("koa-sess-mongo-store");
var responseTime = require("koa-response-time");
var logger = require("koa-logger");
var compress = require("koa-compress");
var bodyParser = require("koa-bodyparser");

var STATIC_FILES_MAP = {};
var SERVE_OPTIONS = {maxAge: 365 * 24 * 60 * 60};

module.exports = function (app, config) {
    if (!config.get("key")) {
        throw new Error("Please add session secret key in the conf file!");
    }
    app.keys = config.get("key");

    if (config.get("env") !== "test") {
        app.use(logger());
    }

    app.use(serve(path.join(config.get("root"), 'build', 'public'), SERVE_OPTIONS, STATIC_FILES_MAP));

    var db = require("./models")(config.get("mongoUrl"));

    app.use(session({
        key: "cst.sid",
        store: new MongoStore({db: db, ttl: 60 * 60 * 1000}), //1小时过期
    }));

    app.use(bodyParser());
    app.use(compress());
    app.use(responseTime());

};
