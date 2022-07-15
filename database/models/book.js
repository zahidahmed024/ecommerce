
const mongoose = require('mongoose');

const bookModel = mongoose.Schema({
    title: {
        type: String,
        required: '{PATH} is required!'
    },
    author: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Author'
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Book', bookModel);