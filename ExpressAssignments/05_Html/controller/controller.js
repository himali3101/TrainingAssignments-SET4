
module.exports = function (app, body) {

    app.get('/', function (req, res) {
        res.render('form');
    })

    app.post('/', function (req, res) {
        var name = req.body.str.split('').reverse().join('')
        res.send(name)
    })
}
