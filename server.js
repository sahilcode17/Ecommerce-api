const express = require('express');
const color = require('colors');
const {errorHandler} = require('./middleware/errorMiddleware');
const connectDB = require('./config/db');

const port = 5000;
connectDB();
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use('/api/seller', require('./routes/sellerRoutes'));
app.use('/api/auth', require('./routes/userRoutes'));
app.use('/api/buyer', require('./routes/buyerRoutes'));
app.use(errorHandler) 
app.listen(port, () => console.log(`Listening on port ${port}`));