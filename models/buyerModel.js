const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const buyerSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    catalog : {
        type : Array,
        default : [],
        required : true
    }
    }
    , {
        timestamps: true
    }
);
module.exports = mongoose.model('buyer', buyerSchema);