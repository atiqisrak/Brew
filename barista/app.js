const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
const uri = process.env.MONGODB_URI;

// Connect to MongoDB asynchrously
async function connect() {
    try {
        await mongoose.connect(uri);
        console.log('MongoDB connected');
    } catch (error) {
        console.log(error.message);
        process.exit(1);
    }
}

connect();

// Log MongoDB connection status
mongoose.connection.on('connected', () =>
    console.log('Mongoose connected to db')
);

mongoose.connection.on('error', (err) =>
    console.log(err.message + ' Is MongoDB running?')
);

// Routes
const userRoutes = require('./routes/userRoutes');
const foodRoutes = require('./routes/foodRoutes');
const orderRoutes = require('./routes/orderRoutes');
const secureRoutes = require('./routes/secureRoutes');


// Note: The order of the routes is important. The more specific routes should be placed before the more general routes. For example, the route /api/users/login should be placed before the route /api/users/:id. Otherwise, the route /api/users/login will never be reached.

app.use('/api/users', userRoutes);
app.use('/api/foods', foodRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/secure', secureRoutes);

// Error Handling

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
