const { default: mongoose } = require('mongoose');
const mangoose = require('mongoose');
const uri = "mongodb+srv://sahilkh:sahil123@cluster0.84lfl.mongodb.net/hybr1d?retryWrites=true&w=majority";
const connectDB = async () => {
    try{
        const conn = await mongoose.connect(uri)
        console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline.bold);
    }
    catch(err){
        console.error(err);
        process.exit(1);
    }
}
module.exports = connectDB;