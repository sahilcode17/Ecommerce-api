const express = require('express');
const router = express.Router();
const {getallSeller, getSeller, setSeller, updateSeller} = require('../controllers/buyerController');
router.route('/').get(getallSeller).post(setSeller);
router.route('/:id').get(getSeller).put(updateSeller);



module.exports = router;