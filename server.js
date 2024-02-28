
const express = require('express');
const logger = require('morgan');
const cors = require('cors');
require('dotenv').config();
require('./config/database');

const app = express();

//MIDDLEWARE
app.use(cors());
app.use(express.json());

//Routes
app.get('/', function(req, res, next) {
    res.send('<h1>Recipe App API</h1>');
});

app.get('/api/recipes', require('./api/recipes'));

app.set("port", process.env.PORT || 3000);

//PORTS
app.listen(app.get("port"), () => {
  console.log(`✅ PORT: ${app.get("port")} `);
});
