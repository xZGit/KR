/**
 * Created by xx on 15/10/30.
 */


var mongoose = require("mongoose");
var UserModel= mongoose.model("User");
var validator = require('validator');

var Sign = {};


Sign.signIn = function *() {

    this.paramCheck.addNeedParam("email", "邮箱错误", validator.isEmail);
    this.paramCheck.addNeedParam("password", "密码为空");
    var params = yield this.paramCheck.check();
    var user = yield  UserModel.findOneByEmail(params.email);
    if(!user ||!user.password) return this.body = yield this.render(1002);
    var match = yield user.passwordMatches(params.password);
    if(!match) return this.body = yield this.render(1003);
    this.body = yield this.render(user);
};


Sign.signUp = function *() {
    this.paramCheck.addNeedParam("email", "邮箱错误", validator.isEmail);
    this.paramCheck.addNeedParam("password", "密码为空");
    var params = yield this.paramCheck.check();
    var user = yield UserModel.findOneByEmail(params.email);
    if (user) return this.body = yield this.render(1001);
    yield UserModel.saveNew(params.email, params.password);
    this.body = yield this.render();
};


export default Sign;