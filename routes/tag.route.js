const express = require('express');
const router = express.Router();
const tagController = require('../controllers/tag.controller');
const middleware=require('./../helpers/middleware');
// POST /tags
router.route('/')
.post(middleware.auth,middleware.checkper("QAManager"),tagController.createTag)
// GET /tags
.get(middleware.auth,middleware.checkper("QAManager"),tagController.getTags)
// GET /tag
router.route('/:id')
.get(middleware.auth,middleware.checkper("QAManager"),tagController.getTag)
// GET /delete tag
.delete(middleware.auth,middleware.checkper("QAManager"),tagController.deleteTag)
// GET /Edit tag
.put(middleware.auth,middleware.checkper("QAManager"),tagController.updateTag)
module.exports = router;