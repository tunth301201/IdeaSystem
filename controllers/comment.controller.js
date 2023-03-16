const Comment = require('../models/Comment');
const User = require('../models/User');


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
      const {isAnonymity, comment, reply} = req.body;
      const user_id=req.params.id
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
  // Delete a comment by ID
const deleteComment = async (req, res) => {
    try {
      // Check if user exists
      const existingComment = await Comment.findByIdAndDelete(req.params.id).exec();
      if (!existingComment) {
        return res.status(404).json({ message: 'Comment not found' });
      }
      res.json({ message: 'Delete comment succesfull ' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error' });
    }
  };
  const updateComment = async (req, res) => {
    try {
      const {user_id, isAnonymity, comment,reply} = req.body;
  
      // Check if comment exists
      const existingComment = await Comment.findByIdAndUpdate(req.params.id).exec();
      if (!existingComment) {
        return res.status(404).json({ message: 'Tag not found' });
      }
  
      // Update comment object
      existingComment.user_id = user_id;
      existingComment.isAnonymity = isAnonymity;
      existingComment.comment = comment;
      existingComment.reply = reply;
  
      await existingComment.save();
      res.json(existingComment);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error' });
    }
  };

module.exports={
    getComment: getComment,
    createComment:createComment,
    deleteComment:deleteComment,
    updateComment:updateComment

}