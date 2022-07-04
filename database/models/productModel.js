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
    files: [images]
}, {
    timestamps: true,
    toObject: {
        transform: function (doc, ret, options) {
            ret.id = ret._id
            delete ret._id
            return ret
        }
    }
})



module.exports = mongoose.model("Products", productSchema)