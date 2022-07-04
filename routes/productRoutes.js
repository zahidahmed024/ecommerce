const express = require('express');
const { upload } = require('../helpers/fileHelper');
const router = express.Router()
const productController = require('../controllers/productController')

router.post('/', upload.array('images'), productController.createProduct)

module.exports = router;