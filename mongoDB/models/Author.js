const mongoose = require('mongoose');

const authorSchema = new mongoose.Schema({
    title: String,
});

const Author = mongoose.model('authors', authorSchema);

module.exports = Author;