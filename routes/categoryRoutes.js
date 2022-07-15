const express = require('express');
const { upload } = require('../helpers/fileHelper');
const router = express.Router()
const categoryController = require('../controllers/categoryController')

router.post('/', categoryController.createCategory)
router.get('/', categoryController.getCategories)

module.exports = router;