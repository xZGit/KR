

"use strict";
var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var  bcrypt = require('co-bcrypt');
var co = require('co');
/**
 * Schema
 */
var UserSchema = new Schema({
    nickname: { type: String },
    introduce:{ type: String },
    headImg: { type: String},
    bgImg:  {type: String},
    email:  {type: String, required: true, unique:true},
    password:  {type: String, required: true},
    create_time: {type: Date, default: Date.now },
    updated: { type: Date, default: Date.now },
}, {
    toJSON : {
        transform: function (doc, ret, options) {
            delete ret.password;
        },
    },
});


/**
 * Middlewares
 */
UserSchema.pre("save", function (done) {

    this.updated = new Date();
    // only hash the password if it has been modified (or is new)
    if (!this.isModified("password")) {
        return done();
    }
    co.wrap(function*() {
        try {
            var salt = yield bcrypt.genSalt(10);
            var hash = yield bcrypt.hash(this.password, salt);
            this.password = hash;
            done();
        }
        catch (err) {
            console.log(err);
            done(err);
        }
    }).call(this).then(done);
});

/**
 * Methods
 */

UserSchema.methods.passwordMatches = function *(password) {
    return yield bcrypt.compare(password, this.password);
};
/**
 * Statics
 */




UserSchema.statics.findOneByEmail = function *(email) {
    return yield this.findOne({email: email}).exec();
};


UserSchema.statics.findOneById = function *(id) {
    return yield this.findOne({_id: id}).exec();
};


UserSchema.statics.saveNew = function *(email, password) {
    var User = this;
    var newUser = new User({ email: email, nickname:email, password: password });
    yield newUser.save();
};





mongoose.model("User", UserSchema);