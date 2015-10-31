"use strict";
var router = require("koa-router")();


var controller = require("./controllers/index");

import SignCtrl from './controllers/sign';


module.exports = function (app) {
    // register functions



    function setUpPageRoute(url) {
        var funcs = Array.prototype.slice.call(arguments, 1);
        router.get(...[url].concat(funcs));
        router.get(...["/api" + url].concat(funcs))
    };


    router.get("/", controller.index);
    router.get("/articles",controller.getArticles);



    router.post("/signIn", SignCtrl.signIn);
    router.post("/signUp", SignCtrl.signUp);




    app.use(router.routes())
        .use(router.allowedMethods());
};
