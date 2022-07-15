const mongoose = require("mongoose");


const categorySchema = new mongoose.Schema({
    name: String,
    description: String,
}, {
    timestamps: true,
    // toObject: {
    //     transform: function (doc, ret, options) {
    //         ret.id = ret._id
    //         delete ret._id
    //         return ret
    //     }
    // }
})



module.exports = mongoose.model("Category", categorySchema)