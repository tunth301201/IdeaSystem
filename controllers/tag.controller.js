const Tag = require('../models/Tag');

// Get all tags
const getTags = async (req, res) => {
    try {
      // Retrieve all tags from database
      const tags = await Tag.find();
  
      res.json(tags);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error' });
    }
  };
  
// Create a new tag
const createTag = async (req, res) => {
    try {
      const { subject, description, start_dateOfTag, end_dateOfTag, end_dateOfIdea} = req.body;
      // Create new tag object
      const newTag = new Tag({
        subject,
        description,
        start_dateOfTag,
        end_dateOfTag,
        end_dateOfIdea,
      });
  
      // Save tag to database
      await newTag.save();
  
      res.status(201).json(newTag);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error' });
    }
  };


module.exports={
    getTags: getTags,
    createTag: createTag
}