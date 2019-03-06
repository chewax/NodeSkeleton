(function () {

    'use strict';
    var log4js = require('log4js');

    log4js.configure({

      appenders: [
        { type: 'console'}
        //{
        //    type: 'logLevelFilter',
        //    level: 'ERROR',
        //    maxLevel: 'FATAL',
        //    appender: {
        //        type: 'smtp',
        //        recipients: 'dwaksman@gmail.com,kelian.puppi@gmail.com',
        //        subject: '[Griffin API] - Error Log',
        //        sendInterval: 60,
        //        SMTP: {
        //            host: 'smtp.gmail.com',
        //            secure: true,
        //            port: 465,
        //            auth: {
        //                user: 'pyromancer.co@gmail.com',
        //                pass: 'pyromancer!R00les'
        //            }
        //        }
        //    }
        //}

      ]

    });

    module.exports = log4js;

}).call(this);