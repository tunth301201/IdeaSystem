const { default: mongoose } = require('mongoose');
const { Validator } = require('node-input-validator');
let Comment = require('../models/Comment');
let Idea = require('../models/Idea');
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
  let idea_id=req.params.idea_id;
	if(!mongoose.Types.ObjectId.isValid(idea_id)){
		return res.status(400).send({
	  		message:'Invalid idea id',
	  		data:{}
	  	});
	}
	Idea.findOne({_id:idea_id}).then(async (idea)=>{
		if(!idea){
			return res.status(400).send({
				message:'No idea found',
				data:{}
			});	
		}else{
			try{
				const v = new Validator(req.body, {
					comment:'required',
				});
				const matched = await v.check();
				if (!matched) {
					return res.status(422).send(v.errors);
				}
				let newCommentDocument= new Comment({
					comment:req.body.comment,
					idea_id:idea_id,
					user_id:req.user._id
				});
				let commentData=await newCommentDocument.save();

				await idea.updateOne(
					{_id:idea_id},
					{
						$push: { comment :commentData._id  } 
					}
				)
				return res.status(200).send({
					message:'Comment successfully added',
					data:commentData[0]
				});
			}catch(err){
				return res.status(400).send({
			  		message:err.message,
			  		data:err
			  	});
			}
		}
	}).catch((err)=>{
		return res.status(400).send({
	  		message:err.message,
	  		data:err
	  	});
	})

}  
  
  // Delete a comment by ID
const deleteComment = async (req, res) => {
    try {
      // Check if comment exists
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
    getComment:getComment,
    createComment:createComment,
    deleteComment:deleteComment,
    updateComment:updateComment,

}