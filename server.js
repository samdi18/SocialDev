const express = require('express');
const connectDB = require('./config/db');
const path = require('path');

const app = express();

// Connect Database
connectDB();

// Init Middleware
app.use(express.json());

// Define Routes
// app.use('/users', require('./routes/users'));
// app.use('/auth', require('./routes/auth'));
// app.use('/profile', require('./routes/profile'));
// app.use('/threads', require('./routes/posts'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
