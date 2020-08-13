var express = require('express')

var app = express()

app.set('view engine', 'pug')

var date = new Date().toDateString()

app.listen(3000);

app.get('/home', function (req, res) {
    res.render('index.pug', { title: "PugTemplate", date: date })
})