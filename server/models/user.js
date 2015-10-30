

"use strict";
var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var  bcrypt = require('co-bcrypt');

/**
 * Schema
 */
var UserSchema = new Schema({
    nickname: { type: String },
    introduce:{ type: String },
    headImg: { type: String},
    bgImg:  {type: Number},
    email:  {type: String, required: true, unique:true},
    pass:  {type: String, required: true},
    create_time: {type: Date, default: Date.now },
    updated: { type: Date, default: Date.now },
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
            done(err);
        }
    }).call(this).then(done);
});

/**
 * Methods
 */
UserSchema.methods.comparePassword = function *(candidatePassword) {
    return yield bcrypt.compare(candidatePassword, this.password);
};

/**
 * Statics
 */

UserSchema.statics.passwordMatches = function *(username, password) {
    var user = yield this.findOne({ username: username.toLowerCase() }).exec();
    if (!user) {
        throw new Error("User not found");
    }

    if (yield user.comparePassword(password)) {
        return user;
    }

    throw new Error("Password does not match");
};
mongoose.model("User", UserSchema);