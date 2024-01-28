const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
// MONGODB_URI=mongodb+srv://atiqisrak:NiloyNiil9@brew.aepyqcg.mongodb.net/?retryWrites=true&w=majority

// PORT=5000
mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://localhost:27017/brewly',
    () => {
        console.log('Connected to MongoDB');
    }
);

mongoose.connection.on('error', (err) =>
    console.log(err.message + ' Is MongoDB running?')
);

// Routes
const userRoutes = require('./routes/userRoutes');
const foodRoutes = require('./routes/foodRoutes');
const orderRoutes = require('./routes/orderRoutes');
const secureRoutes = require('./routes/secureRoutes');

app.use('/api/users', userRoutes);
app.use('/api/foods', foodRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/secure', secureRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
