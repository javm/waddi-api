const express = require('express');
const router = express.Router();
const postsController = require('#controllers/posts.controller');
const reviewsController = require('#controllers/reviews.controller');
const authGuard = require('#middlewares/auth.middleware');
const authCreatorGuard = require('#middlewares/auth.creator.middleware');
const errorHandler = require('#middlewares/error.middleware');
const authEditorMiddleware = require('../middlewares/auth.editor.middleware');

/* GET posts */
router.get('/', errorHandler(postsController.get));

/* GET posts by id */
router.get('/:id', errorHandler(postsController.show));

/* POST posts */
router.post('/', authGuard, authCreatorGuard, errorHandler(postsController.post));
/* PATCH posts */
router.patch('/:id', authGuard, authEditorMiddleware, errorHandler(postsController.patch));
/* DELETE posts */
router.delete('/:id', authGuard, authCreatorGuard, errorHandler(postsController.destroy));

/* POST reviews */
router.post('/:id/reviews', authGuard, errorHandler(reviewsController.post));

/* GET reviews */
router.get('/:id/reviews', authGuard, errorHandler(reviewsController.get));

module.exports = router;