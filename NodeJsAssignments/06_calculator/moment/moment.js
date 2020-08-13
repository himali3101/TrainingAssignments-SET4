var moment = require('moment')

var date = moment().format('dddd, MMMM Do YYYY, h:mm:ss a');

var datenTime = function () {
    return date;
}

module.exports = datenTime

