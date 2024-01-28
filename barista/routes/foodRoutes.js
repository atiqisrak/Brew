const express = require('express');
const router = express.Router();
const FoodController = require('../controllers/FoodController');

router.get('/', FoodController.getAllFoods);
router.get('/:id', FoodController.getFoodById);
router.post('/', FoodController.createFood);
router.put('/:id', FoodController.updateFood);
router.delete('/:id', FoodController.deleteFood);

module.exports = router;
