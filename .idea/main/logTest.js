// error => https://iamdaeyun.tistory.com/entry/do-it-NodeJS-3-Nodejs%EC%9D%98-%EA%B8%B0%EB%B3%B8-%EA%B8%B0%EB%8A%A5
const winston = require('winston');
const winstonDaily = require('winston-daily-rotate-file');
const moment = require('moment');
function timeStampFormat() {
    return moment().format('YYYY-MM-DD HH:mm:ss.SSS ZZ');
};
// const logger = new (winston.Logger)({
const logger = winston.createLogger({
   transports: [
       new (winstonDaily)({
          name: 'info-file',
          filename: './log/server',
          datePattern: 'YYYY-MM-DD',
          colorize: false,
          maxsize: 50000000,
          maxFiles: 1000,
          level: 'info',
          showLevel: true,
          json: false,
          timestamp: timeStampFormat
       }),
       new (winston.transports.Console)({
           name: 'debug-console',
           colorize: true,
           level: 'debug',
           showLevel: true,
           json: false,
           timestamp: timeStampFormat
       })
   ],
    exceptionHandler: [
        new (winstonDaily)({
            name: 'exception-file',
            filename: './log/exception',
            datePattern: 'YYYY-MM-DD',
            colorize: false,
            maxsize: 50000000,
            maxFiles: 1000,
            level: 'error',
            showLevel: true,
            json: false,
            timestamp: timeStampFormat
        }),
        new (winston.transports.Console)({
            name: 'exception-console',
            colorize: true,
            level: 'debug',
            showLevel: true,
            json: false,
            timestamp: timeStampFormat
        })
    ]
});