const fs = require('fs');

function logReqRes(filename) {
    return (req, res, next) => {
        fs.appendFile(filename, `\n${Date.now()} - ${req.method} ${req.url}`, (err) => {
            if (err) console.error('Error writing log:', err);
        });
        next();
    };
}

module.exports = logReqRes;
