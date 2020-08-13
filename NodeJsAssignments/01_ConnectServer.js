var http = require('http');

var server = http.createServer()
var PORT = process.env.PORT || 3000;

server.on('request', function (req, res) {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Success, i'm listening from port: " + PORT);
});

server.listen(3000);