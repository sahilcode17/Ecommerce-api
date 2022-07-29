const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const asyncHandler = require('express-async-handler');
const User = require('../models/userModel');

// POST /api/auth/register
// Register a user (accept username, password, type of user - buyer/seller)

const registerUser = asyncHandler( async (req, res) => {
    const { username, password, typeofuser } = req.body;
    if(!username || !password || !typeofuser) {
        res.status(400)
        throw new Error('param missing')
    }

    const user = await User.findOne({ username });
    if(user) {
        res.status(400)
        throw new Error('User already exists')
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const newUser = await User.create({
        username,
        password: hashedPassword,
        typeofuser
    });
    if(newUser){
        res.status(201).json({
            _id: newUser.id,
            username: newUser.username,
            typeofuser: newUser.typeofuser,
            token: generateToken(newUser.id)
        })
    }else{
        res.status(400)
        throw new Error('User not created')
    }

    
})
// POST /api/auth/login
// Let a previously registered user log in (e.g. retrieve authentication token)

const LoginUser = asyncHandler( async (req, res) => {
    const { username, password } = req.body;
    if(!username || !password) {
        res.status(400)
        throw new Error('param missing')
    }
    const user = await User.findOne({ username });
    if(user && (await bcrypt.compare(password,user.password))) {
        res.status(200).json({
            _id: user.id,
            username: user.username,
            typeofuser: user.typeofuser,
            token: generateToken(user.id)
        })
    }else{
        res.status(400)
        throw new Error('Invalid Credentials')
    }
    
    
})
// GET /api/auth/user
// Get the user associated with the JWT token
const getUser =  asyncHandler( async (req, res) => {
    const {_id,username,typeofuser} = await User.findById(req.user.id); 
    res.status(200).json({
       id: _id,
        username,
        typeofuser

})
}
)
// Generate JWT token
const generateToken = (id) => {
    return jwt.sign({ id }, 'secret', {
        expiresIn: '30d',
    })
}
module.exports = {
    registerUser
    , LoginUser
    , getUser
}