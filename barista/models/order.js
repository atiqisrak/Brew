// models/order.js
const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    foodId: { type: mongoose.Schema.Types.ObjectId, ref: 'Food', required: true },
    option: { type: String, required: true },
    customization: {
        type: Object,
        default: {},
    },
    status: { type: String, enum: ['Received', 'In Progress', 'Delivered'], default: 'Received' },
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
