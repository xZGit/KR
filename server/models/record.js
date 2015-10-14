/**
 * Created by xx on 15/6/4.
 */

"use strict";
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

/**
 * Schema
 */
var RecordSchema = new Schema({
    wechatId: { type: String },
    wechatName:{ type: String },
    openid: { type: String},
    result: {type: Number},
    items: {type:Object},
    updated: { type: Date, default: Date.now },
});




RecordSchema.pre("save", function (next) {
    this.updated = new Date();
    next();
});



mongoose.model("Record", RecordSchema);