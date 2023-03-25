const express = require('express');
const router = express.Router();
const commentcontroller = require('../controllers/comment.controller');
const middleware=require('./../helpers/middleware');
// GET /tags
router.get('/',middleware.auth, commentcontroller.getComment);
router.post('/:idea_id/comments/',middleware.auth, commentcontroller.createComment);
router.delete('/:id', commentcontroller.deleteComment);
module.exports = router;
