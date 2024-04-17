const express= require('express');
const productController=require('../controllers/productsControllers.js')

const productRouter= express.Router();

productRouter.route('/')
.get(productController.getAllProducts)
.post(productController.addProducts);

productRouter.route('/:id')
.put(productController.replaceProducts)
.delete(productController.delProducts);

module.exports= productRouter;