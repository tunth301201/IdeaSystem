const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Types.ObjectId,
    ref: 'User',
    required: true,
    trim: true
  },
  isAnonymity: {
    type: Boolean,
    required: true,
  },
  comment: {
    type: String,
    required: true,
  },
  reply:[{
   user_id:{
   type:mongoose.Types.ObjectId,
   ref: 'User'
    },
    reply_comment:{
        type: String
    },
    reply_isAnonymity:{
        type:Boolean
    }
  }]
}, { timestamps: true });

const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;
