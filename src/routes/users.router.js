const express = require('express');
const router = express.Router();
const usersController = require('#controllers/users.controller');
const errorHandler = require('#middlewares/error.middleware');
const authGuard = require('#middlewares/auth.middleware');
const schema = require('#validations/auth.validation');
const validate = require('#utils/validator.util'); 

/* GET users */
router.get('/', usersController.get);
router.post('/register', validate(schema.register), errorHandler(usersController.register));
router.post('/login',    validate(schema.login),    errorHandler(usersController.login));
router.get('/user',      authGuard,                 errorHandler(usersController.getUser));
module.exports = router;