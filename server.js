const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => res.send('Hello man'));

// Routes init
app.use('/api/users', require('./routes/users'));
app.use('/api/writings', require('./routes/writings'));
app.use('/api/auth', require('./routes/auth'));

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
