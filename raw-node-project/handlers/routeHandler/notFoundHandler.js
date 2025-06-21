

const handler = {};
handler.notFoundHanlder = (requestProperties, callback) => {
    callback(404, {
        message: 'Your requested URL was not found',
    });

}
module.exports = handler;