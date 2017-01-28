"use strict";
var utils_1 = require("./../../common/utils");
var bodyParser = require("body-parser");
var express = require("express");
var ProductsController = (function () {
    function ProductsController() {
    }
    ProductsController.getRouter = function () {
        var router = express.Router();
        var urlJsonParser = bodyParser.json();
        //let urlEncodeParser = bodyParser.urlencoded({extended:false});
        router
            .route('/')
            .get(function (req, res) {
            //     //fs.createReadStream(`${Utils.APP_ROOT}/${Utils.APP_STATIC}/products.html`)
            //    .pipe(res);
            res.sendFile(utils_1.Utils.APP_ROOT + "/" + utils_1.Utils.APP_STATIC + "/products.html");
        });
        router
            .route('/:id')
            .get(function (req, res) {
            console.log(req.params.id);
            res.end();
        });
        router
            .route('/')
            .post(urlJsonParser, function (req, res) {
            console.log(req.body);
            res.end();
        });
        router
            .route('/:id')
            .put(urlJsonParser, function (req, res) {
            console.log(req.body);
            res.end();
        });
        router
            .route('/')
            .delete(urlJsonParser, function (req, res) {
            console.log(req.body);
            res.end();
        });
        return router;
    };
    return ProductsController;
}());
exports.productsController = ProductsController.getRouter();
