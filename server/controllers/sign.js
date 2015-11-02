/**
 * Created by xx on 15/10/30.
 */


var mongoose = require("mongoose");
var User = mongoose.model("User");
var ParamCheck = require('../common/paramCheck');
var validator = require('validator');

var Sign = {};


Sign.signIn = function *() {
    var pc = new ParamCheck(this.request);
    pc.addNeedParam("email", "邮箱错误", validator.isEmail);
    pc.addNeedParam("password", "密码为空");
    var params = yield pc.check();
    var user = yield  User.findOneByEmail(params.email);
    if(!user ||!user.password) return this.body = yield this.render(1002);
    var match = yield user.passwordMatches(params.password);
    if(!match) return this.body = yield this.render(1003);
    this.body = yield this.render(user);
};


Sign.signUp = function *() {
    var pc = new ParamCheck(this.request);
    pc.addNeedParam("email", "邮箱错误", validator.isEmail);
    pc.addNeedParam("password", "密码为空");
    var params = yield pc.check();
    var user = yield User.findOneByEmail(params.email);
    if (user) return this.body = yield this.render(1001);
    yield User.saveNew(params.email, params.password);
    this.body = yield this.render();
};


export default Sign;