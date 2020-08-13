var fs = require('fs');
var searchAWord = process.argv[2].toLowerCase();

var stream = fs.createReadStream('./test.txt');
var found = false;

fs.readFile('./test.txt', 'utf8', function(err, data){
    if (err) throw err;
    
})
// fs.readFile('./test.txt', 'utf8', function (err, data) {
//     if (err) throw err;
//     var word = data.toLowerCase().split(' ');
//     var result = word.filter(function (word) {
//         return word.includes(searchAWord);
//     })


//     console.log('The word "' + searchAWord + '" appears ' + result.length + " times in the text.");

// })

