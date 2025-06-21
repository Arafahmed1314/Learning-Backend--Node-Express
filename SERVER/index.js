const http = require('http');
const fs = require('fs');
const url = require('url');
const app = require('express')();
app.get('/', (req, res) => {
    res.send('Hello from Express!');
});

app.get('/about', (req, res) => {
    return res.send('About Page' + req.query.name);
});
function myHandler(req, res) {
    console.log('Request receivedddd');
    const myUrl = url.parse(req.url, true);
    console.log(myUrl);
    fs.appendFileSync('log.txt', `Request at ${new Date().toISOString()}\n`);
    if (myUrl.pathname === '/about') {
        const name = myUrl.query.myname || 'Guest';
        res.end(`About Page: ${name}`);
    } else
        res.end('Hello World');
}
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
// const myServer = http.createServer(app);
// myServer.listen(3000, () => {
//     console.log('Server is running on port 3000');
// });