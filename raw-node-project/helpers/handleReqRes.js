const url = require('url');
const { StringDecoder } = require('string_decoder');
const routes = require('../routes');
const { notFoundHandler } = require('../handlers/routeHandler/notFoundHandler');

const handler = {}
handler.handleReqRes = (req, res) => {
    const parseUrl = url.parse(req.url, true);
    const path = parseUrl.pathname;
    const trimmedPath = path.replace(/^\/+|\/+$/g, '');
    const method = req.method.toLowerCase();
    const queryStringObject = parseUrl.query;
    const headers = req.headers;
    const decoder = new StringDecoder('utf-8');
    const requestProperties = {
        parseUrl,
        trimmedPath,
        path,
        queryStringObject,
        method,
        headers,
    };
    const chosenHandler = routes[trimmedPath] ? routes[trimmedPath] : notFoundHandler;
    chosenHandler(requestProperties, (statusCode, payload) => {
        statusCode = typeof statusCode === 'number' ? statusCode : 500;
        payload = typeof payload === 'object' ? payload : {};
        const payloadString = JSON.stringify(payload);
        res.writeHead(statusCode);
        res.end(payloadString);
    });
    let buffer = '';
    req.on('data', (data) => {
        buffer += decoder.write(data);

    });
    req.on('end', () => {
        // buffer += decoder.end();
        console.log(buffer);
        res.end('Hellddo World');
    });
}
