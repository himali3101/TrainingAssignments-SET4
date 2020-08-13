var express = require('express');
var body = require('body-parser');
const controller = require('./controller/controller');

var app = express();

app.set('view engine', 'ejs');

app.use(express.static('./view'));
app.use(body.urlencoded({ extended: false }))

controller(app, body);

app.listen(3000);