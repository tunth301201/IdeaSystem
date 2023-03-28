const express = require('express');
const router = express.Router();
const commentcontroller = require('../controllers/comment.controller');
const middleware=require('./../helpers/middleware');
// GET /tags
router.get('/',middleware.auth, commentcontroller.getComment);
//Create comment
router.post('/:idea_id/comments/',middleware.auth, commentcontroller.createComment);
//Create reply comment
router.put('/:comment_id/reply',middleware.auth, commentcontroller.replyComment);
//Delete comment
router.delete('/:comment_id/',middleware.auth, commentcontroller.deleteComment);
//Edit Comment
router.put('/:comment_id/',middleware.auth, commentcontroller.updateComment);
module.exports = router;
