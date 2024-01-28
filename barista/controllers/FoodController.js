// controllers/FoodController.js
const Food = require('../models/food');

exports.getAllFoods = async (req, res) => {
    try {
        const foods = await Food.find();
        res.json(foods);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getFoodById = async (req, res) => {
    try {
        const food = await Food.findById(req.params.id);
        if (!food) {
            return res.status(404).json({ message: 'Food not found' });
        }
        res.json(food);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.createFood = async (req, res) => {
    const food = new Food({
        name: req.body.name,
        description: req.body.description,
        customizations: req.body.customizations || [],
    });

    try {
        const newFood = await food.save();
        res.status(201).json(newFood);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.updateFood = async (req, res) => {
    try {
        const food = await Food.findById(req.params.id);
        if (!food) {
            return res.status(404).json({ message: 'Food not found' });
        }

        food.name = req.body.name || food.name;
        food.description = req.body.description || food.description;
        food.customizations = req.body.customizations || food.customizations;

        const updatedFood = await food.save();
        res.json(updatedFood);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.deleteFood = async (req, res) => {
    try {
        const food = await Food.findById(req.params.id);
        if (!food) {
            return res.status(404).json({ message: 'Food not found' });
        }

        await food.remove();
        res.json({ message: 'Food deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
