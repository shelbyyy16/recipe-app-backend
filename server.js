const express = require('express');
const logger = require('morgan');
const cors = require('cors');
require('dotenv').config();
require('./config/database');

const app = express();

app.use(cors());
app.use(express.json());

// Mount routes
app.get('/', function(req, res, next) {
    res.send('<h1>Recipe App API</h1>');
});

app.use('/api/recipes', require('./api/recipes'));

app.set("port", process.env.PORT || 3000);

app.listen(app.get("port"), () => {
  console.log(`✅ PORT: ${app.get("port")} 🌟`);
});