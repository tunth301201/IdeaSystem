const express = require('express');
const router = express.Router();
const tagController = require('../controllers/tag.controller');
// GET /tags
router.get('/', tagController.getTags);
module.exports = router;
