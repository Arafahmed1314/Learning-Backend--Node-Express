const http = require('http');
const { handleReqRes } = require('./helpers/handleReqRes');
const app = {};
app.config = {
    port: 3000
};
app.handleReqRes = handleReqRes
app.createServer = () => {
    const server = http.createServer(app.handleReqRes)
    server.listen(app.config.port, () => {
        console.log(`Server is running on port ${app.config.port}`);
    });

}

app.createServer();
