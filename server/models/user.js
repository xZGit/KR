

"use strict";
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

/**
 * Schema
 */
var UserSchema = new Schema({
    nickname: { type: String },
    introduce:{ type: String },
    headImg: { type: String},
    bgImg:  {type: Number},
    email:  {type:Object},
    create_time: {type: Date, default: Date.now },
    updated: { type: Date, default: Date.now },
});




RecordSchema.pre("save", function (next) {
    this.updated = new Date();
    next();
});



mongoose.model("User", UserSchema);