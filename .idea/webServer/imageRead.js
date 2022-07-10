const http = require('http');
const fs = require("fs");
const server = http.createServer();
server.listen(3000);

server.on('request', (req, res) => {
   const filename = 'house.png';
   // fs.readFile(filename, (err, data) => {
   //     res.writeHead(200, {"Content-Type": "image/png"});
   //     res.write(data);
   //     res.end();
   // });
    const infile = fs.createReadStream(filename, {flags: 'r'});
    infile.pipe(res);
});