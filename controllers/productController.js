const multer = require('multer');
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');
const constants = require('../constants')
const ProductModel = require('../database/models/productModel')
const Book = require('../database/models/book')
const { upload } = require('../helpers/fileHelper')
const imageConversion = require("image-conversion");
const imageProcess = require('../utlis/imageProcess');

module.exports.createProduct = async (req, res) => {
    try {
        let images = [];
        for (const file of req.files) {
            let imageName = await imageProcess(file, `${Date.now().toString()}`)
            console.log('imageName', imageName)
            images.push({
                url: req.protocol + '://' + req.get('host') + path.join('/uploads', imageName)
            })
        }
        let product = new ProductModel({ ...req.body, sizes: JSON.parse(req.body.sizes), images: images });
        let result = await product.save();
        return res.status(200).send({
            message: constants.statusMessages.product_created,
            body: result.toObject()
        })
    }
    catch (error) {
        console.log(error)
        return res.status(400).send({
            message: constants.statusMessages.product_creation_failed,
        })
    }
}




module.exports.getProducts = async (req, res) => {
    try {
        const products = await ProductModel.fetchProducts()
        res.send(products);
        return res.status(200).send({
            message: constants.statusMessages.category_created,
            body: result
        })
    }
    catch (error) {
        console.log(error)
        return res.status(400).send({
            message: 'failed fetching prodcuts',
        })
    }
}