/**
 * Created by xx on 15/10/30.
 */


var mongoose = require("mongoose");
var User = mongoose.model("User");
var ParamCheck = require('../common/paramCheck');
var validator = require('validator');

var Sign= {};


Sign.signIn= function *() {
   var pc = new ParamCheck(this.request);
   pc.addNeedParam("email", "邮箱错误", validator.isEmail);
   pc.addNeedParam("password", "密码为空");
   var params = yield pc.check();
   var user = yield User.find({email:params.email}).exec();
   this.body={};
};





export default Sign;