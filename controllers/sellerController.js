const asynchandler = require('express-async-handler')
const buyer = require('../models/buyerModel');
const User = require('../models/userModel');
const order = require('../models/orderModel');

const getallproducts =  asynchandler( async (req, res) => {
    const sellers = await buyer.find({user: req.user.id});
    res.status(200).json(sellers);
    })

// POST /api/seller/create-catalog
// Send a list of items to create a catalog for a seller

const createproduct = asynchandler(async (req, res) => {
    const user = await User.findById(req.user.id);
    if(user.typeofuser !== 'seller') {
        res.status(401)
        throw new Error('You are not authorized to create a product')
    }
    const seller = await buyer.find({user: req.user.id});
    if(seller.length > 0) {
        res.status(401)
        throw new Error('You have already created a product')
    }
    const allcatalog = req.body;
    var catalogs = [];
    for(var i = 0; i < allcatalog.length; i++) {
        catalogs.push(allcatalog[i])
    }
    const product = await buyer.create({
        user: req.user.id,
        catalog: catalogs

    })
    
    res.status(200).json(product);
})

// GET /api/seller/orders
// Retrieve the list of orders received by a seller

const getorders = asynchandler(async (req, res) => {
    const orders = await order.find({user: req.user.id});
    res.status(200).json(orders);
    })

module.exports = {
     getallproducts,
    createproduct,
    getorders

}
    
    