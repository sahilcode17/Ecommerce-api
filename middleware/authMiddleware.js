const jwt = require('jsonwebtoken');
const asyncHandler = require('express-async-handler');
const User = require('../models/userModel');

const protect = asyncHandler( async (req, res, next) => {
let token 
if(
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
)
{   try{
    token = req.headers.authorization.split(' ')[1];
    const decode = jwt.verify(token, 'secret');
    req.user = await User.findById(decode.id).select('-password');
    next();
}catch(err){
    console.log(err);
    res.status(401).send({error: 'Please authenticate.'});
    
}}
if(!token){
    res.status(401)
    throw new Error('Please authenticate.');
}

});
module.exports = { protect }