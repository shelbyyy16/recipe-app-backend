// Require modules
const express = require('express');
const logger = require('morgan');
const cors = require('cors');
require('dotenv').config();
require('./config/database');

// Create the Express app
const app = express();
  
// Configure the app (app.set)
  
  
// Mount middleware (app.use)
app.use(cors());
  
// Mount routes
app.get('/', function(req, res, next) {
    res.send('<h1>Hello Express</h1>');
  });

app.get('/api/recipes', (req, res) => {
  res.json({ message: 'API endpoint to fetch recipes' });
});

app.post('/api/recipes', (req, res) => {
  res.json({ message: 'API endpoint to add a recipe' });
});
  
// Tell the app to listen on port 3000
app.listen(3000, function() {
  console.log('Listening on port 3000');
});