// models/food.js
const mongoose = require('mongoose');

const foodSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    description: { type: String },
    customizations: [
        {
            name: { type: String, required: true },
            options: [{ type: String }],
        },
    ],
});

const Food = mongoose.model('Food', foodSchema);

module.exports = Food;
