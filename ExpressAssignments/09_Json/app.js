var fs=require('fs');
var express=require('express');
var app=express();
var name=process.argv[2];

var object;
var readFile=fs.readFile(name,'utf8',function(err,data){
    var test=data.toString();
     object=JSON.parse(test);
});

app.get('/books',function(req,res){
    res.json(object);
})

app.listen(3000);