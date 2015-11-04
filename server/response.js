/**
 * Created by xx on 15/6/5.
 */


"use strict";

var codeMapMsg = require('./err').codeMapMsg;
var views = require("co-views");
var logger = require('../logger').getLogger(module);
var ParamCheck = require('./common/paramCheck');
/*
 * response middleware.
 */

module.exports = function (app, config) {
    // register functions
    var errorTemplate = "error";
    app.use(
        function *result(next) {

            if (this.request.url.indexOf('/api') !== -1) {
                this.isApi = true;
            }

            this.paramCheck = new ParamCheck(this);
            this.processRender = views(config.get("root") + "/server/views", {
                map: {html: "swig"},
                //cache: config.app.env === "development" ? false: "memory" ,
                locals: {}
            });
            this.render = function *(code, data, template) {

                if (typeof code != "number") {
                    template = data;
                    data = code;
                    code = 0;
                    }
            var result = {code: code};

            if (data) result.data = data;
            if (code != 0) {
                result.error = codeMapMsg[code] || "unrecongize error";
                template = errorTemplate;
                logger.error(result.error);
            }

            if (this.isApi || this.request.method==="POST" ||  !template) {

                return result;
            }

            return yield this.processRender(template, code == 0 ? data : result);
            };

            this.throwCode = function *(code, data) {
                this.body = yield this.render(code, data);
            };

            try {
                yield next;
                if (404 == this.response.status && !this.response.body) {
                    logger.error("not found path %s", this.request.url);
                    this.throw(404);
                }

            } catch (err) {

                this.status = err.status || 500;
                logger.error(err.message, err.stack);

                var template = errorTemplate;
                //if(err.status==404) template="404";
                // application
                //this.app.emit('error', err, this);

                var result = {code: err.code || this.status, error: err.message};

                if (this.isApi || this.request.method==="POST" ||  !template) {
                    return this.body = result;
                }

                this.body = yield this.processRender(template, result);
            }
        });


};


