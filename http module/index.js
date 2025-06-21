const http = require('http');
const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.write('Hello World!');
        res.end();
    }
    else if (req.url === "/about") {
        res.write('About Page!');
        res.end();
    }
    else if (req.url === "/contact") {
        res.write('Contact Page!');
        res.end();
    }
    else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.write('404 Not Found!');
        res.end();
    }
});


server.listen(3000);
console.log('Server is running on port 3000');
