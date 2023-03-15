const express = require('express');
const router = express.Router();
const tagController = require('../controllers/tag.controller');

// POST /tags
router.post('/', tagController.createTag);
// GET /tags
router.get('/', tagController.getTags);

router.delete('/:id', tagController.deleteTag);
router.put('/:id', tagController.updateTag);
module.exports = router;
