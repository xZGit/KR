/**
 * Created by xx on 15/10/30.
 */
require('babel/register');


const server = require('../server'),
    config = require('../conf/config');

const port = config.get('server_port');

var request = require('supertest')(server.listen(port));


module.exports = request;