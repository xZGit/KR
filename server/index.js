

"use strict";
/**
 * Dependencies
 */


import koa from "koa";

/**
 * Config
 */


import config from '../conf/config';


//import routes  from '../app/route';
/**
 * Server
 */
var app = koa();



require("./koa")(app, config);

require("./response")(app, config);



 //Routes
require("./routes")(app);

//import renderRoute from "./renderRoutes" ;
//
//renderRoute(app);


export default app;



