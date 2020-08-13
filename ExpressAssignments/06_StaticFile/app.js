var express = require('express');
var path = require('path')

var app = express();

app.use(express.static('public'))

app.listen(3000);

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/public/index.html', function (err, data) {
        res.end(data);
    });
})