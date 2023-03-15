const express = require('express');
const router = express.Router();
const commentcontroller = require('../controllers/comment.controller');

// POST /tags

// GET /tags
router.get('/', commentcontroller.getComment);

router.post('/', commentcontroller.createComment);

router.delete('/:id', commentcontroller.deleteComment);
module.exports = router;
