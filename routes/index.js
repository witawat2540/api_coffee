var express = require('express');
var router = express.Router();

var user = require('./user');
var product = require('./product');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

router.post('/login', user.Login);

router.get('/get_product', product.getAll);
router.post('/add_sale', product.add_sale);
router.get('/sum_qty', product.sum_qty);





module.exports = router;