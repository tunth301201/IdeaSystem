const Comment = require('../models/Comment');

// Get all comments
const getComment = async (req, res) => {
    try {
      // Retrieve all tags from database
      const comments = await Comment.find();
  
      res.json(comments);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error' });
    }
  };
 // Create a new comment
const createComment = async (req, res) => {
    try {
      const { user_id, isAnonymity, comment, reply} = req.body;
      // Create new comment object
      const newComment = new Comment({
        user_id,
        isAnonymity,
        comment,
        reply,
      });
  
      // Save comment to database
      await newComment.save();
      res.status(201).json(newComment);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error' });
    }
  };

module.exports={
    getComment: getComment,
    createComment:createComment
}