const express=require('express');
const router=express.Router();


const {getProducts,addProduct,updateProduct,deleteProduct}=require('../controllers/products')

/*const controllers=require('../controllers/products')
Pero mejor con destructuring de ecmascript 6*/

//para resumir si quiero usar varios metodos en una mis ruta
router.route('/')
    .get(getProducts)
    .post(addProduct);

router.route('/:id')
    .put(updateProduct)
    .delete(deleteProduct);


module.exports=router

