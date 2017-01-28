"use strict";
var productsController_1 = require("./controllers/productsController");
var express = require("express");
var utils_1 = require("../common/utils");
var Server = (function () {
    function Server() {
        this.app = express();
        var port = process.env.port || 4000;
        this.app.listen(port, function (err) {
            if (err == null) {
                console.log("app running on port " + port);
            }
        });
        //MIDDLEWARE
        this.app.use(express.static(utils_1.Utils.APP_STATIC));
        this.app.use('/', function (req, res, next) {
            console.log("request url: " + req.url);
            next();
        });
        this.app.use('/products', productsController_1.productsController);
    }
    Server.Start = function () {
        return new Server();
    };
    return Server;
}());
exports.Server = Server;
