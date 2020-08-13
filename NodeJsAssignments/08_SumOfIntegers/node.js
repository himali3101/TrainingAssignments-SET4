var fs = require('fs')
var sum = 0

var read = fs.readFile('./int.txt', 'utf-8', function (err, data) {
    if (err) throw err;

    var number = data.split(' ');
    var result = number.reduce(function (sum, num) {
        return sum + Number(num);
    }, 0)
    console.log(result)
})