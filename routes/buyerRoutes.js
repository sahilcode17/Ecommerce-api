const express = require('express');
const router = express.Router();
const {getlistofseller ,getsellerbyid,createorder } = require('../controllers/buyerController');
const {protect} = require('../middleware/authMiddleware');
router.route('/list-of-sellers').get(getlistofseller);
router.route('/seller-catalog/:sellerid').get(getsellerbyid);
router.route('/create-order/:sellerid').post(createorder);




module.exports = router;