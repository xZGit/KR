/**
 * Created by xx on 15/10/14.
 */
require('babel/register');

const server = require('../server'),
      config = require('../conf/config');

const port = config.get('server_port');


server.listen(port);



console.log('Koa server listening on port: ' + port);