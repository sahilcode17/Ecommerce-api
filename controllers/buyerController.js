const asynchandler = require('express-async-handler')


const getallSeller =  asynchandler( async (req, res) => {
    res.status(200).json({message:'hello buyer!'})
    })
const getSeller = asynchandler(async (req, res) => {
    res.status(200).json({message:`get Catalog with id ${req.params.id}`})
    })
const setSeller = asynchandler(async (req, res) => {
    if(!req.body.text){
        res.status(400)
        throw new Error('text is required')
    
    }
    res.status(200).json({message:'set Catalog!'})
})
const updateSeller =asynchandler( async (req, res) => {
    res.status(200).json({message:`update Catalog with id ${req.params.id}`})
    })
module.exports = {
    getallSeller,
    getSeller,
    setSeller,
    updateSeller
}
    
    