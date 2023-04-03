// const mongoose = require('mongoose');

// const ideaSchema = new mongoose.Schema({
//     tag_id: {
//         type: mongoose.Types.ObjectId,
//         ref: 'Tag',
//         required: true
//     },
//     user_id: {
//         type: mongoose.Types.ObjectId,
//         ref: 'User',
//         required: true
//     },
//     title: {
//         type: String,
//         required: true,
//         trim: true
//     },
//     content: {
//         type: String,
//         required: true,
//         trim: true
//     },
//     like: {
//         type: Number,
//         default: 0
//     },
//     dislike: {
//         type: Number,
//         default: 0
//     },
//     documents: [{
//         type: mongoose.Types.ObjectId,
//         ref: 'GridFSFile'
//     }],
//     comment: [{
//         type: mongoose.Types.ObjectId,
//         ref: 'Comment'
//     }],
//     view_time: {
//         type: Number,
//         default: 0
//     },

// }, { timestamps: true });

// const Idea = mongoose.model('Idea', ideaSchema);



const mongoose = require('mongoose');

let Idea;
try {
    Idea = mongoose.model('Idea');
} catch (error) {
  // The model doesn't exist yet
  const ideaSchema = new mongoose.Schema({
    
    tag_id: {
        type: mongoose.Types.ObjectId,
        ref: 'Tag',
        required: true
    },
    user_id: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
        required: true
    },
    title: {
        type: String,
        required: true,
        trim: true
    },
    content: {
        type: String,
        required: true,
        trim: true
    },
    like: {
        type: Number,
        default: 0
    },
    dislike: {
        type: Number,
        default: 0
    },
    documents: [{
        type: mongoose.Types.ObjectId,
        ref: 'GridFSFile'
    }],
    comments: [{
        type: mongoose.Types.ObjectId,
        ref: 'Comment'
    }],
    view_time: {
        type: Number,
        default: 0
    }
  },{timestamps: true});
  Idea = mongoose.model('Idea', ideaSchema);
}

module.exports = Idea;