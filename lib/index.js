(function () {

    'use strict';

    var express = require('express');
    var bodyParser = require('body-parser');
    var http = require('http');
    var cors = require('./config/cors');
    var config = require('./config/config');
    var publicRoutes = require('./routes/publicRoutes');
    var protectedRoutes = require('./routes/protectedRoutes');
    var errorHandler = require('./modules/core/errors/errorHandler');

    var app = express();

    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());
    app.use(cors());

    app.use(config.api.version, publicRoutes);
    app.use(config.api.version, protectedRoutes);
    app.use(errorHandler.handleUncaughtErrors);

    http.createServer(app).listen(config.server.port);

}).call(this);