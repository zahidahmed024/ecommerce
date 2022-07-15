const constants = require('../constants')
const CategoryModel = require('../database/models/categoryModel')
const Author = require('../database/models/author')


module.exports.createCategory = async (req, res) => {
    console.log('images', req.body)
    try {
        let category = new CategoryModel(req.body);
        let result = await category.save();
        return res.status(200).send({
            message: constants.statusMessages.category_created,
            body: result
        })
    }
    catch (error) {
        console.log(error)
        return res.status(400).send({
            message: constants.statusMessages.category_creation_failed,
        })
    }
}
module.exports.getCategories = async (req, res) => {

    // console.log('images', req.body)
    try {
        // let result = await CategoryModel.find({ _id: '62c2aa5e5b74b671b6a8c90a' }).populate('products');
        const authors = await Author.find().populate('books');
        res.send(authors);
        // return res.status(200).send({
        //     message: constants.statusMessages.category_created,
        //     body: result
        // })
    }
    catch (error) {
        console.log(error)
        return res.status(400).send({
            message: constants.statusMessages.category_creation_failed,
        })
    }
}
