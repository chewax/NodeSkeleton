(function(){

    'use strict';

    var authController = require('./authController');

    module.exports.appendProtectedRoutes = function(router){

        return router;
    }

    module.exports.appendPublicRoutes = function(router){

        router.post('/login', authController.authenticate);

        return router;
    }

}).call(this)
