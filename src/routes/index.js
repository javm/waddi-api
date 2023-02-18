const express = require('express');
const router = express.Router();
const usersRouter = require('#routes/users.router');
const postsRouter = require('#routes/posts.router');
//app.use('/auth', authRouter);
router.use('/users', usersRouter);
router.use('/posts', postsRouter);

router.all('*',  (req, res) => res.status(400).json({ message: 'Bad Request.'}))

module.exports = router;