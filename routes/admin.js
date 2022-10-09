var express = require('express');
const productHelpers = require('../helpers/product-helpers');
var router = express.Router();
var productHelper = require('../helpers/product-helpers')

/*
let productData = [{
  name: 'Samsung Galaxy s22 ultra',
  description: 'This is the android King',
  imgLink: 'https://images.samsung.com/levant/smartphones/galaxy-s22-ultra/buy/S22_Ultra_ProductKV_Black_MO.jpg '
},
{
  name: 'iPhone 14 pro Max',
  description: 'This is the IOS King',
  imgLink: 'https://media.croma.com/image/upload/v1662703416/Croma%20Assets/Communication/Mobiles/Images/261991_hhfa33.png'
},
{
  name: 'Oneplus 9 pro',
  description: 'This is the Oneplus King',
  imgLink: 'https://m.media-amazon.com/images/I/612ytK4luvL._SL1500_.jpg '
},
{
  name: 'Redmi note 11 pro',
  description: 'This is the Redmi King',
  imgLink: 'https://m.media-amazon.com/images/I/71u-1krs2XL._SL1500_.jpg '
},
{
  name: 'nothing phone 1' ,
  description: 'Ith Nothing .. ithil Light kathum',
  imgLink: 'https://cdn.shopify.com/s/files/1/0586/3270/0077/files/12Image_1280x1020_a11e1bb0-7ace-47b6-a8ad-ae34c33c5314_2160x.png?v=1658151576 '
}] */

/* GET users listing. */
router.get('/', function(req, res, next) {
  productHelpers.getAllProducts().then((products)=>{
    res.render('admin/view-products',{admin:true,products});
  })

});

router.get('/add-product',(req,res,next)=>{
  res.render('admin/add-product',{admin:true})
})
router.post('/add-product',function(req,res){
  console.log(req.body);
  productHelpers.addProduct(req.body,(result)=>{
    res.render('admin/add-product')
  })
})



module.exports = router;
