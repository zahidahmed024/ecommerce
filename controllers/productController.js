const multer = require('multer');
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');
const constants = require('../constants')
const ProductModel = require('../database/models/productModel')
const { upload } = require('../helpers/fileHelper')
const imageConversion = require("image-conversion");
const imageProcess = require('../utlis/imageProcess');

module.exports.createProduct = async (req, res) => {

    // console.log('images', req.files)

    let images = [];
    for (const file of req.files) {
        let imageName = await imageProcess(file, `${Date.now().toString()}`)
        console.log('imageName', imageName)
        images.push({
            url: req.protocol + '://' + req.get('host') + path.join('/uploads', imageName)
        })
    }
    console.log('images', images)

    // let images = [];
    // for (const file of req.files) {
    //     const { filename: image } = file;

    //     await sharp(file.path)
    //         .resize(200, 200)
    //         .jpeg({ quality: 80, optimiseCoding: true, })
    //         .toFile(
    //             path.resolve(file.destination, '../resized', image)
    //         )
    //     await fs.unlinkSync(file.path)
    //     images.push({
    //         url: req.protocol + '://' + req.get('host') + path.join('/resized', image)
    //     })
    // }
    // console.log('images', images)

    // const { filename: image } = req.file;
    // await sharp(req.file.path)
    //     .resize(200, 200)
    //     .jpeg({ quality: 90 })
    //     .toFile(
    //         path.resolve(req.file.destination, '../resized', image)
    //     )
    // fs.unlinkSync(req.file.path)


    // console.log('req', req.files)
    // try {
    // upload(req, res, function (err) {
    //     let images = [];
    //     req.files?.forEach(element => {
    //         const file = {
    //             fileName: element.originalname,
    //             filePath: element.path,
    //             fileType: element.mimetype,
    //             fileSize: element.size
    //         }
    //         images.push(file);
    //     });
    //     console.log('images', images)
    // console.log('res----->', res)

    // if (err instanceof multer.MulterError) {
    //     res.send(err);
    // } else if (err) {
    //     res.send(err);
    // }
    // });
    //     return false
    // let images = [];
    // req.images.forEach(element => {
    //     const file = {
    //         fileName: element.originalname,
    //         filePath: element.path,
    //         fileType: element.mimetype,
    //         fileSize: element.size
    //     }
    //     images.push(file);
    // });
    // let product = new ProductModel({ ...req.body, imgaes: filesArray });
    // let result = await product.save();
    // return res.status(200).send({
    //     message: constants.statusMessages.product_created,
    //     body: result.toObject()
    // })
    // } catch (error) {
    //     console.log(error)
    //     return res.status(400).send({
    //         message: constants.statusMessages.product_creation_failed,
    //     })
    // }
}