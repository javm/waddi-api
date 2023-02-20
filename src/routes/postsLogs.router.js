const express = require('express');
const router = express.Router();
const postsLogsController = require('#controllers/logs.controller');
const errorHandler = require('#middlewares/error.middleware');

/* GET postLogs */
router.get('/', errorHandler(postsLogsController.get));
module.exports = router;