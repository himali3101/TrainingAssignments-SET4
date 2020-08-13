var fs = require('fs');
const { SSL_OP_NETSCAPE_DEMO_CIPHER_CHANGE_BUG } = require('constants');

fs.readFile('./test.txt', 'utf8', function (err, data) {
    if (err) throw err;
    var result = data.split(' ');
    console.log(result);
})

