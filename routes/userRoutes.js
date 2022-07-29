const express = require('express');
const router = express.Router();
const {registerUser,LoginUser,getUser} = require('../controllers/userController');
const {protect} = require('../middleware/authMiddleware');
router.route('/register').post(registerUser);
router.route('/login').post(LoginUser);
router.get('/me',protect,getUser);

module.exports = router;