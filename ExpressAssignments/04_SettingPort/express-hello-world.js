var express = require('express');

var app = express();

const port = process.env.PORT;

app.listen(process.env.PORT, function (req, res) {
    console.log("Listening to : " + port)
})

app.get('/', function (req, res) {
    res.send("Hello World!");
})

var date = new Date("2013-03-10T02:00:00Z");

app.get('/time', function (req, res) {
    res.send(date.toISOString());
})