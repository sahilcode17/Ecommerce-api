const express = require('express');
const {errorHandler} = require('./middleware/errorMiddleware');
const port = 5000;
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use('/api/buyer', require('./routes/buyerRoutes'));
app.use(errorHandler) 
app.listen(port, () => console.log(`Listening on port ${port}`));