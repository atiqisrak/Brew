const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

const mongoURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/barista';

mongoose.connect(
    mongoURI,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    },
).then(() => {
    console.log('The connection with mongod is established');
}).catch((err) => {
    console.error('Error connecting to MongoDB:', err);
});

mongoose.connection.on('error', (err) =>
    console.log(err.message + ' is mongod not running?')
);
