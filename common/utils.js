"use strict";
var path = require("path");
var Utils = (function () {
    function Utils() {
    }
    return Utils;
}());
Utils.APP_ROOT = path.dirname(require.main.filename);
Utils.APP_STATIC = 'app';
exports.Utils = Utils;
