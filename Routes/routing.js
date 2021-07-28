var express  = require ('express');
var router = express.Router();
var myController = require('../Controller/loginPage')
var signUpController  = require('../Controller/signUp')
var updateController = require('../Controller/updateProfile');
var productsController  = require ('../Controller/products')

router.post('/login', myController.postLoginDetails);
router.post('/signup',signUpController.addNewUser);
router.post('/updateProfile', updateController.upProfile);
router.get('/products', productsController.getProducts);
router.get('/productsDeals', productsController.getProductsWithDeals);
router.get('/products/:prodId', productsController.getProductDetails);
router.post('/products/searchByName', productsController.getSearchProduct)

module.exports = router;