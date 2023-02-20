const express = require('express');
const router = express.Router();
const usersRouter = require('#routes/users.router');
const postsRouter = require('#routes/posts.router');
const postsLogsRouter = require('#routes/postsLogs.router');

router.use('/users', usersRouter);
router.use('/posts', postsRouter);
router.use('/history', postsLogsRouter);

router.all('*',  (req, res) => res.status(400).json({ message: 'Bad Request.'}))

module.exports = router;