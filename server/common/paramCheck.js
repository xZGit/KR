/**
 * Created by xx on 15/8/27.
 */
var _ = require('lodash');


var ParamCheck = function (ctx) {
    this.ctx = ctx;
    this.paramArr = [];
};


ParamCheck.prototype.getParamFromReq = function () {
    var ctx=this.ctx;
    ctx.params = ctx.params || {};
    ctx.request.body = ctx.request.body || {};
    return _.merge(ctx.params, ctx.request.body);
};


ParamCheck.prototype.addNeedParam = function (key, errMsg, checkFunc, defaultValue) {
    return this.addParam(key, errMsg, checkFunc, defaultValue);
};


ParamCheck.prototype.addOptionParam = function (key, errMsg, checkFunc, defaultValue) {
    return this.addParam(key, errMsg, checkFunc, defaultValue, true);
};


ParamCheck.prototype.addParam = function (key, errMsg, checkFunc, defaultValue, option) {
    var arr = {};
    if (!key) return;
    if (errMsg) arr.errMsg = errMsg;
    if (checkFunc) arr.checkFunc = checkFunc;
    if (defaultValue) arr.defaultValue = defaultValue;
    if (option) arr.option = option;
    arr.key = key;
    this.paramArr.push(arr);
};


ParamCheck.prototype.check = function () {
    var _self = this;
    var src=this.getParamFromReq();
    return new Promise(function (resolve, reject) {
        var results = {};
        _.map(_self.paramArr, function (p) {
            if (!p.key)  return reject({message: p.errMsg});
            var v =src[p.key];
            if (v) {
                if (p.checkFunc && typeof p.checkFunc === "function") {
                    if (!p.checkFunc.call(null, v)) {
                        return reject({message: p.errMsg+":"+v});
                    }
                }
                results[p.key] = v;
            } else if (p.defaultValue) {
                results[p.key] = p.defaultValue;

            } else if (!p.option) {
                return reject({message:p.errMsg || p.key + " is not found"});
            }
        });
        resolve(results);
    });

};


module.exports = ParamCheck;
