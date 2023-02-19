const express = require('express');
const router = express.Router();
const postsController = require('#controllers/posts.controller');
const authGuard = require('#middlewares/auth.middleware');
const authCreatorGuard = require('#middlewares/auth.creator.middleware');
const errorHandler = require('#middlewares/error.middleware');

/* GET posts */
router.get('/', errorHandler(postsController.get));
/* POST posts */
router.post('/', authGuard, authCreatorGuard, errorHandler(postsController.post));
module.exports = router;