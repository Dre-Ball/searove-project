const ecsFormat = require('@elastic/ecs-winston-format');
const winston = require('winston');


const filter = (level) => winston.format( (info) => {
    if (info.level === level) {
        return info;
    }
})();

// log levels system 
const levels = {
    fatal: 0,
    error: 1,
    warn: 2,
    info: 3,
    debug: 4,
    http: 5,
};

const transports = [
    // logging target for errors and fatals
    new winston.transports.File({
        filename: "./logs/error.json",
        level: "error",
        format: ecsFormat({ convertReqRes: true }),
    }),

    // new winston.transports.File({
    //     filename: "./logs/combined.log",
    //     level: "info",
    //     // simple form
    //     format: winston.format.simple()
    // }),

    // new winston.transports.File({
    //     filename: "./logs/http.log",
    //     level: "http",
    //     // process only HTTP logs
    //     format: filter("http"),
    // }),

    new winston.transports.Console({
        level: "debug",
        // specify the format for target
        format: winston.format.combine(
            // process only debug logs
            filter("debug"),
            // colorize the output
            winston.format.colorize(),
            // add a timestamp
            winston.format.timestamp(),
            // use simple form
            winston.format.simple()
        )
    }),
];

// create a Winston logger
const logger = winston.createLogger({
    // specify own log levels system
    levels,
    transports,
});


module.exports = {
    logger,
};