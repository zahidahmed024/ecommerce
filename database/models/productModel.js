const mongoose = require("mongoose");

const sizeSchema = new mongoose.Schema({
    name: String,
    price: Number
});
const images = new mongoose.Schema({
    url: String,
});

const productSchema = new mongoose.Schema({
    name: String,
    brand: String,
    description: String,
    sizes: [sizeSchema],
    images: [images],
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        required: true
    }
},
    {
        statics: {
            fetchProducts(name) {
                return this.find({}).populate({ path: 'category' }).exec()
            }
        }
    }
)



module.exports = mongoose.model("Product", productSchema)