/* eslint no-var: 0 */
require("babel/register")({
    ignore: /node_modules/,
    optional: ["es7.objectRestSpread", "runtime"]
});

var config = require("./webpack/webpack.config");
var result = config();
module.exports = result;
