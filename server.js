require('dotenv').config();
const connectDB = require('./config/db');
const path = require('path');
const express = require('express');

const app = express();

// Connect database
connectDB();

// Init middleware
app.use(express.json({ extended: false }));

// Routes
app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/writings', require('./routes/writings'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
