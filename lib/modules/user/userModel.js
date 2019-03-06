(function () {

    'use strict';

    var mongoose = require('../../config/database').Mongoose;
    var utils = require('../core/utils');

    var userSchema = new mongoose.Schema({

            doc: {type: String, unique: true},
            firstName: String,
            lastName: String,
            email: String,

            credentials: {
                username: {type: String, unique: true},
                password: String
            },

            createdAt: {type: Date, default: new Date()},
            updatedAt: {type: Date, default: new Date()}

        },

        {
            collection: 'Users'
        }
    );


    userSchema.pre('save', function(next) {
        var self = this;
        if (!self.credentials) next();

        // Before saving, change the provided password to a hashed/salted one
        utils.hashPasswordAsync(self.credentials.password)
            .then(function(hash){
                self.credentials.password = hash;
                next();
            })
            .catch(function (err) {
                next(err);
            })
    });

    var User = mongoose.model('User', userSchema);

    module.exports = User;

}).call(this);