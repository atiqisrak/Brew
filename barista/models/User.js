const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, required: true },
    jwtToken: { type: String },
    // Add other user characteristics here
});

// Hash the password before saving to the database
userSchema.pre('save', async function (next) {
    if (this.isModified('password')) {
        const saltRounds = 10;
        this.password = await bcrypt.hash(this.password, saltRounds);
    }
    next();
});

// Generate a JWT token for the user
userSchema.methods.generateAuthToken = function () {
    return jwt.sign({ _id: this._id, username: this.username, role: this.role }, process.env.JWT_SECRET);
};

const User = mongoose.model('User', userSchema);

module.exports = User;
