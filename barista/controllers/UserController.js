const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user');

const hashPassword = async (password) => {
    const saltRounds = 10;
    return await bcrypt.hash(password, saltRounds);
}

const matchPassword = async (password, hashedPassword) => {
    try {
        return await bcrypt.compare(password, hashedPassword);
    } catch (error) {
        console.error("bcrypt.compare Error: ", error);
        throw error;
    }
}

const generateAuthToken = (user) => {
    return jwt.sign({ _id: user._id, username: user.username, role: user.role }, process.env.JWT_SECRET);
}

exports.login = async (req, res) => {
    const { username, password } = req.body;

    try {
        console.log("Login Attempt - Username:", username);

        // Find user by username
        const user = await User.findOne({ username });

        if (!user) {
            console.log("User not found");
            return res.status(401).json({ message: 'Invalid username or password' });
        }

        console.log("User found:", user);

        // Compare entered password with stored hashed password
        const isMatch = await bcrypt.compare(password, user.password);

        console.log("Entered Password: ", password);
        console.log("Stored Password (Hashed): ", user.password);
        console.log("Password Match: ", isMatch);

        if (!isMatch) {
            console.log("Invalid password");
            return res.status(401).json({ message: 'Invalid username or password' });
        }

        // Generate and send JWT token for authentication
        const token = generateAuthToken(user);

        console.log("JWT Token generated:", token);

        // Optionally, store the token in the user document
        user.jwtToken = token;
        await user.save();

        res.json({ user, token });
    } catch (error) {
        console.error("Login Error:", error.message);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};


exports.createUser = async (req, res) => {
    const { name, email, phone, username, password, role } = req.body;

    try {
        const hashedPassword = await hashPassword(password);
        const newUser = new User({ name, email, phone, username, password, role });
        const savedUser = await newUser.save();
        const token = generateAuthToken(savedUser);

        res.json({ user: savedUser, token });
    } catch (error) {
        console.log("Create user Error: ", error.message)
        res.status(500).json({ message: error.message });
    }


};
exports.updateUser = async (req, res) => {
    const { id } = req.params;
    const { username, password, role } = req.body;

    try {
        const user = await user.findById(id);

        if (!user) {
            return res.status(404).json({ message: 'user not found' });
        }

        // Update user information
        if (username) user.username = username;
        if (password) {
            const saltRounds = 10;
            user.password = await bcrypt.hash(password, saltRounds);
        }
        if (role) user.role = role;

        // Save the updated user
        const updatedUser = await user.save();

        // You might want to generate a new token here if the username or role is updated
        const token = updatedUser.generateAuthToken();

        res.json({ user: updatedUser, token });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
