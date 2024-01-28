const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// Connect to MongoDB (replace 'your_database_url' with your MongoDB connection string)
mongoose.connect('your_database_url', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
