const express = require('express');
const router = express.Router();
const commentcontroller = require('../controllers/comment.controller');
// GET /tags
router.get('/', commentcontroller.getComment);
module.exports = router;
