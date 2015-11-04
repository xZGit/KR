/**
 * Created by xx on 15/11/3.
 */


/**
 * Created by xx on 15/10/30.
 */


var mongoose = require("mongoose");
var UserModel = mongoose.model("User");
var ParamCheck = require('../common/paramCheck');
var validator = require('validator');

var User = {};




User.getUserInfo = function *() {

    this.paramCheck.addNeedParam("id", "id错误", validator.isMongoId);
    var params = yield this.paramCheck.check();
    var user = yield  UserModel.findOneById(params.id);
    user.password = null;
    this.body = yield this.render(user);
};




export default User;