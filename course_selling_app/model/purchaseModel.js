const mongoose = require('mongoose');

const purchaseSchema = new mongoose.Schema({
    userId: {type: mongoose.Schema.Types.ObjectId, ref: 'user'},
    courseId: {type: mongoose.Schema.Types.ObjectId, ref: 'course'}
});

module.exports = mongoose.model('purchase', purchaseSchema);