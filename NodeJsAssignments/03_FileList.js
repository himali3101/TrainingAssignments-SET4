var fs = require('fs')

fs.readdir(__dirname, function (error, data) {
    if (error) throw error
    data.forEach(function (item) {
        fs.lstat(item, function (error, stat) {
            if (error) throw error
            var prefix
            if (stat.isFile()) prefix = 'FILE'
            else if (stat.isDirectory()) prefix = 'DIR  '
            else prefix = '??? '
            console.log(prefix + '=> ' + item)
        })
    })
})