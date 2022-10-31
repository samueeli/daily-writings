require('dotenv').config();
const connectDB = require('./config/db');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

// Connect database
connectDB();

// Init middleware
app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('Hello man'));

// Routes
app.use('/api/users', require('./routes/users'));
app.use('/api/writings', require('./routes/writings'));
app.use('/api/auth', require('./routes/auth'));

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
