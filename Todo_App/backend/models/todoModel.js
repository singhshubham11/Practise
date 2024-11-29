const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    userid: {type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true},
    task: {type: String, required: true},
    completed: {type: Boolean, default: false}
},{
    timestamps: true // this enables the default 'createdAt' and 'updatedAt' fields
});

module.exports = mongoose.model('Todo', todoSchema);