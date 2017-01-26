"use strict";
var express = require("express");
var utils_1 = require("../common/utils");
var Server = (function () {
    function Server() {
        var _this = this;
        this.port = 4000;
        this.app = express();
        this.app.listen(this.port, function (error) {
            if (error == null) {
                console.log("app running on port " + _this.port);
            }
        });
        this.app.use(express.static(utils_1.Utils.APP_STATIC));
        this.initRoutes();
    }
    Server.Start = function () {
        return new Server();
    };
    Server.prototype.initRoutes = function () {
        this.app.get('/articles', function (req, res) {
            res.send('<h1>articles</h1>');
        });
        this.productsRouter = express.Router();
        this.productsRouter
            .route('/')
            .get(function (req, res) {
            res.sendFile(utils_1.Utils.APP_ROOT + "/" + utils_1.Utils.APP_STATIC + "/products.html");
        });
        this.app.use('/products', this.productsRouter);
    };
    return Server;
}());
exports.Server = Server;
