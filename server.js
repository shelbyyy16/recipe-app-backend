const express = require('express');
const logger = require('morgan');
const cors = require('cors');
const mongoURI = process.env.DATABASE_URL;
require('dotenv').config();
require('./config/database');

const app = express();
  
app.use(cors());
app.use(express.json()); 

// Mount routes
app.use('/', require('./api/recipes'));

app.get('/', function(req, res, next) {
    res.send('<h1>Hello Express</h1>');
});

app.set("port", process.env.PORT || 3000);

app.listen(app.get("port"), () => {
  console.log(`✅ PORT: ${app.get("port")} 🌟`);
});