var express = require('express');
var port = process.argv[2];

var app = express();

app.listen(port);

app.get('/home', function (req, res) {
    console.log("port number is : " + port)
    res.send("Hello World!");
})