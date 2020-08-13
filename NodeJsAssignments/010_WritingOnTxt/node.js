var fs = require('fs');

var writeToFile = process.argv[2];

var words = writeToFile.split(' ');
var fileName = words[0];

fs.writeFile(fileName + '.txt', writeToFile, function (err) {
    if (err) throw err;
    console.log('The file has been saved!');

});


fs.readFile(fileName + '.txt', 'utf8', function (err, data) {
    if (err) throw err;
    console.log(data);
})

