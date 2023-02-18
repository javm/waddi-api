const express = require('express');
const router = express.Router();
const postsController = require('#controllers/posts.controller');

/* GET posts */
router.get('/', postsController.get);
module.exports = router;