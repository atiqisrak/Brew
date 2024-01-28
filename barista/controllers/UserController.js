// controllers/UserController.js
const bcrypt = require('bcrypt');
const User = require('../models/user');

exports.login = async (req, res) => {
    const { username, password } = req.body;

    try {
        const user = await User.findOne({ username });

        if (!user) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        const token = user.generateAuthToken();
        user.jwtToken = token;
        await user.save();

        res.json({ token });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.createUser = async (req, res) => {
    const { username, password, role } = req.body;

    try {
        const existingUser = await User.findOne({ username });

        if (existingUser) {
            return res.status(400).json({ message: 'Username already exists' });
        }

        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        const user = new User({
            username,
            password: hashedPassword,
            role,
            // Add other user characteristics here
        });

        const newUser = await user.save();
        const token = user.generateAuthToken();

        res.status(201).json({ user: newUser, token });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
