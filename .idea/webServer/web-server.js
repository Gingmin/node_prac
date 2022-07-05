const http = require('http');
const server = http.createServer();
const port = 3000;
// server.listen(port, () => {
//     console.log("web server start : port ", port);
// })
const host = '192.168.0.5';
// const host = '127.0.0.1';
server.listen(port, host, '50000', () => {
    console.log("web server start " + host + ' : ' + port);
});
// http.createServer((req, res) => {
//     res.writeHead(200, { "Content-Type": "text/plain" });
//     res.end("Hello World");
// }).listen(1337, "127.0.0.1");
// console.log("Server running at http://127.0.0.1:1337/")