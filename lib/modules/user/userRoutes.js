(function(){
	'use strict;'

	var userController = require('./userController');

	module.exports.appendProtectedRoutes = function(router){

		router.post('/users', userController.create);
		router.put('/users', userController.update);
		router.delete('/users', userController.delete);

		return router;
	};

    module.exports.appendPublicRoutes = function(router){

		return router;
	};


}).call(this);
