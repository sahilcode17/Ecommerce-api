const asyncHandler = require('express-async-handler');
const User = require('../models/userModel');
const buyer = require('../models/buyerModel');
const order = require('../models/orderModel');
const { json } = require('express');

// GET /api/buyer/list-of-sellers
// Get a list of all sellers
const getlistofseller = asyncHandler( async (req, res) => {
    const sellers = await User.find({typeofuser:'seller'});
    const sellerslist = sellers.map(seller => {
        return {
            _id: seller.id,
            username: seller.username,
            typeofuser: seller.typeofuser
        }
    }
    )
    res.status(200).json({
        sellerslist
    });
});
// GET /api/buyer/seller-catalog/:seller_id
// Get the catalog of a seller by seller_id

const getsellerbyid = asyncHandler( async (req, res) => {
   const products = await buyer.find({user: req.params.sellerid});
   
    res.status(200).json({"catalog":products[0].catalog});
    
    
});
// POST /api/buyer/create-order/:seller_id
// Send a list of items to create an order for seller with id = seller_id

const createorder = asyncHandler( async (req, res) => {
    const user = await User.findById(req.params.sellerid);
    if(user.typeofuser !== 'seller') {
        res.status(401)
        throw new Error('You are not authorized to create a product')
    }
    const alluseroder = req.body;
    var userorders = [];
    for(var i = 0; i < alluseroder.length; i++) {
        userorders.push(alluseroder[i])
    }
    
    const orders = await order.create({
        user: req.params.sellerid,
        orders: userorders
        
    })
    res.status(200).json(orders);
    console.log(userorders);
    
});

module.exports = {
    getlistofseller,
    getsellerbyid,
    createorder
}

