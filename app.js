const express = require('express');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 3000; // Use the port defined in the environment variables or 3000 as the default port

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet');

// Middleware
app.use(express.json()); // Parse incoming requests with JSON payloads
app.use(express.urlencoded({ extended: true })); // Parse incoming requests with URL-encoded payloads

// Routes
//const authRouter = require('#routes/auth.router');
const usersRouter = require('#routes/users.router');
const postsRouter = require('#routes/posts.router');
//app.use('/auth', authRouter);
app.use('/api/users', usersRouter);
app.use('/api/posts', postsRouter);

// Error handling middleware
//const errorHandler = require('#utils/errorHandler');
//app.use(errorHandler);

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

module.exports = app;