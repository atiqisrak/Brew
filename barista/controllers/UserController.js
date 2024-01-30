const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const hashPassword = async (password) => {
    const saltRounds = 10;
    return await bcrypt.hash(password, saltRounds);
}

const matchPassword = async (password, hashedPassword) => {
    return await bcrypt.compare(password, hashedPassword);
}

const generateAuthToken = (user) => {
    return jwt.sign({ _id: user._id, username: user.username, role: user.role }, process.env.JWT_SECRET);
}

exports.createUser = async (req, res) => {
    const { name, email, phone, username, password, role } = req.body;

    try {
        const hashedPassword = await hashPassword(password);
        const newUser = new User({ name, email, phone, username, password: hashedPassword, role });
        const savedUser = await newUser.save();
        const token = generateAuthToken(savedUser);

        res.json({ user: savedUser, token });
    } catch (error) {
        console.log("Create User Error: ", error.message)
        res.status(500).json({ message: error.message });
    }


};

exports.login = async (req, res) => {
    const { username, password } = req.body;

    try {
        const user = await User.findOne({ username });

        if (!user) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        const isMatch = await matchPassword(password, user.password);

        if (!isMatch) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        const token = generateAuthToken(user);

        user.jwtToken = token;
        await user.save();

        res.json({ user, token });
    } catch (error) {
        console.log("Ling Error: ", error.message)
        res.status(500).json({ message: error.message });
    }
};

exports.updateUser = async (req, res) => {
    const { id } = req.params;
    const { username, password, role } = req.body;

    try {
        const user = await User.findById(id);

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
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
