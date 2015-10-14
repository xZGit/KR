/**
 * Created by xx on 15/6/4.
 */

"use strict";

var mongoose = require('mongoose');
var util = require('util');
var logger = require("../../logger").getLogger(module);

module.exports = function (config) {

    var connection = mongoose.connect(config.mongo.url, function (err) {
        if (err) {
            console.error('connect to %s error: ', config.db, err.message);
            process.exit(1);
        }
    }).connection;

    mongoose.set('debug', function (collectionName, method, query, doc, options) {
        logger.info('Mongodb %s.%s(%s) %s %s', collectionName, method, format(query), format(doc), format(options));
    });

    var format = function format(obj) {
        if (!obj) return '';
        return util.inspect(obj, false, 10, true).replace(/\n/g, '').replace(/\s{2,}/g, ' ');
    };
// models
    require('./record');
    return connection;
};

