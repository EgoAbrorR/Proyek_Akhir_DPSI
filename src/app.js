const express = require('express');
const app = express();
const dotenv = require('dotenv');

const authRoute = require('./routes/auth');
const financialRoute = require('./routes/financial');
const salesRoute = require('./routes/sales');
const userRoute = require('./routes/user');
const productRoute = require('./routes/product');
const customerRoute = require('./routes/customer');

dotenv.config();

app.use(express.json());

app.use('/api/auth', authRoute);
app.use('/api/financial', financialRoute);
app.use('/api/sales', salesRoute);
app.use('/api/users', userRoute);
app.use('/api/products', productRoute);
app.use('/api/customers', customerRoute);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
