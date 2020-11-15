var express = require('express');
var router = express.Router();

var user = require('./user');
var product = require('./product');
var order = require('./order');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

router.post('/login', user.Login);

router.get('/get_product', product.getAll);
router.post('/add_sale', product.add_sale);
router.get('/sum_qty', product.sum_qty);
router.get('/get_sale', product.get_sale);
router.put('/update_qty', product.update_qty);
router.delete('/delete_sale/:id', product.delete_sale);


router.post('/endsale', order.endsale);





module.exports = router;