(function () {
    'use strict';

    var express = require('express');
    var authRoutes = require('../modules/authentication/authRoutes');

    var router = express.Router();

    router = authRoutes.appendPublicRoutes(router);

    module.exports = router;

}).call(this);

