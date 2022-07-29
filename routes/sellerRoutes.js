const express = require('express');
const router = express.Router();
const { getallproducts,geteachproduct,createproduct ,getorders} = require('../controllers/sellerController');
const {protect} = require('../middleware/authMiddleware');
router.route('/').get(protect,getallproducts);
router.route('/create-catalog').post(protect,createproduct);
router.route('/orders').get(protect,getorders);



module.exports = router;