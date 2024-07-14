const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const connectDB = require('./config/database');
const eventRoutes = require('./routes/routes');

const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use('/api', eventRoutes);

connectDB();

module.exports = app;
