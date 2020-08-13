var bodyparser = require('body-parser');
const { publicDecrypt } = require('crypto');

var data = [{ id: 1, item: 'soap', price: 256 }, { id: 2, item: 'oil', price: 500 }, { id: 3, item: 'Rice', price: 600 }];

module.exports = function (app) {

    app.use(bodyparser.urlencoded({
        extended: true
    }));



    app.get('/items', function (req, res) {
        res.render('display', { data: data });
    })

    app.post('/items', function (req, res) {
        var id = Number(req.body.item.id);
        var item = req.body.item.item;
        var price = Number(req.body.item.price);
        data.push({ id: id, item: item, price: price });
        res.render('display', { data: data });
    });

    app.delete('/items', function (req, res) {
        var item = data.find(function (item) {
            if (item.id = req.body.item.id)
                return item;
        });

        var index = data.indexOf(item);

        data.splice(index, 1);
        res.render('display', { data: data });


    })

    app.get('/items/:id', function (req, res) {
        var found = data.find(function (item) {
            if (item.id = req.params.id)
                return item;
        });

        res.render('response', { data: found });
    });

    app.patch('/items/:id', function (res, req) {
        console.log(req.params.id);
        var item = data.find(function (item) {
            if (item.id == req.params.id)
                return item;

        });

        var name = req.body.item.item;
        var price = req.body.item.price;

        item.item = name;
        item.price = price;
        res.render('display');


    })

}

