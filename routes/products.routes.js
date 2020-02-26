const express = require('express');
const router = express.Router();
const ProductController = require('../controllers/products.controller');

router.get('/products', ProductController.getAll);
router.get('/products/random', ProductController.getRandom);
router.get('/products/:id', ProductController.getSingleRecord);
router.post('/products', ProductController.postRecord);
router.put('/products/:id', ProductController.updateRecord);
router.delete('/products/:id', ProductController.deleteRecord);

module.exports = router;
