// const fs = require("fs");
// const ourReadStream = fs.createReadStream(`${__dirname}/buff.txt`, "utf-8");

// ourReadStream.on("data", (chunk) => {
//     console.log("New chunk received: ");
//     console.log(chunk);
// }
// );
const http = require('http');
const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.write('<html><head><title>Form</title></head></html>');
        res.write('<body><form action="/process" method="POST"><input type="text" name="username"><button type="submit">Submitt</button></form></body>');
        res.end();
    }
    else if (req.url === "/process" && req.method === "POST") {
        req.on('data', (chunk) => {
            console.log(`Data chunk: ${chunk.toString()}`);
        });
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
