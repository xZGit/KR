"use strict";
var router = require("koa-router")();


var controller = require("./controllers/index");


module.exports = function (app) {
    // register functions



    function setUpPageRoute(url) {
        var funcs = Array.prototype.slice.call(arguments, 1);
        router.get.apply(router, [url].concat(funcs));
        router.get.apply(router, ["/api" + url].concat(funcs))
    };


    router.get("/", controller.index);
    app.use(router.routes())
        .use(router.allowedMethods());
};
