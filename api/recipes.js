const express = require('express');
const router = express.Router();
const Recipe = require('../models/Recipe'); 

// Route to get all recipes
router.get('/', async (req, res) => {
  try {
    const recipes = await Recipe.find();
    res.json(recipes);
  } catch (error) {
    console.error('Error fetching recipes:', error);
  }
});

// Route to add a new recipe
router.post('/', async (req, res) => {
  const { name, ingredients, instructions } = req.body;

  try {
    const newRecipe = new Recipe({ name, ingredients, instructions });
    await newRecipe.save();
    res.json({ message: 'Recipe added successfully', recipe: newRecipe });
  } catch (error) {
    console.error('Error adding recipe:', error);
  }
});

// Other routes for updating and deleting recipes can be added as needed

module.exports = router;
