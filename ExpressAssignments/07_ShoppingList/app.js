var express=require('express');
var app=express();
var controller=require('./controllers/controller');

app.set('view engine','ejs');

controller(app);

console.log('Hello')

app.listen(3000);