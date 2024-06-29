const express = require('express');
const { getProducts } = require('../controller/productController');
const router = express.Router();

router.route('/order').post(getProducts);
