var express = require('express')


var app1 = express();



var date = new Date();
var currYear = date.getFullYear();

app1.get('/year', function (req, res) {
    console.log(currYear)
    var age = req.query.age;
    var birthYear = currYear - age;
    res.send("Your age is : " + birthYear);
});

app1.listen(3000);