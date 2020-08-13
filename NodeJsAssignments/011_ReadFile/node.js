var fs = require('fs')
var path = require('path')

var fileName = fs.readdir(__dirname, function (error, data) {
    if (error) throw error
    data.forEach(function (item) {
        if (path.extname(item) == '.txt') {
            fs.readFile(item, 'utf-8', function (err, content) {
                if (error) throw error
                console.log(content)
            })
        }
    })
})
