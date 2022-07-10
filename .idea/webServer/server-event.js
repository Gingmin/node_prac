const http = require('http');
const server = http.createServer();
const port = 3000;
server.listen(port, function() {
    console.log("web start", port);
});
server.on('connection', (socket) => {
    const addr = socket.address();
    console.log("connection", addr.address, addr.port);
})
server.on('request', (req, res) => {
    console.log("request");
    // console.dir(req);
    res.write("<!DOCTYPE html>");
    res.write("<html>");
    res.write("<head>");
    res.write("<title>response</title>");
    res.write("</head>");
    res.write("<body>");
    res.write("<h1>node</h1>");
    res.write("</body>");
    res.write("</html>");
    res.end();
});
server.on('close', () => {
    console.log("close");
});