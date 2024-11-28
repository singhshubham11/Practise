const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    title: String,
    authorId: {type: mongoose.Schema.Types.ObjectId, ref: 'authors'}
});

const Book = mongoose.model('books', bookSchema);

module.exports = Book;