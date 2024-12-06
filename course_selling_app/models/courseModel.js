const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
    title: String,
    description: String,
    price: Number,
    imageUrl: String,
    creatorId: {type: mongoose.Schema.Types.ObjectId, ref: 'admin'}
});

module.exports = mongoose.model('course', courseSchema);