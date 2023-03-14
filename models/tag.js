const mongoose = require('mongoose');

const tagSchema = new mongoose.Schema({
  subject: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true,
    trim: true
  },
  start_dateOfTag: {
    type: Date,
    required: true,
  },
  end_dateOfTag: {
    type: Date,
    required: true,
  },
  end_dateOfIdea: {
    type: Date,
    required: true,
  }
}, { timestamps: true });

const Tag = mongoose.model('Tag', tagSchema);

module.exports = Tag;
