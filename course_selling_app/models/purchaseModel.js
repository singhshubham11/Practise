const mongoose = require('mongoose');

const purchaseSchema = new mongoose.Schema({
    userid: {type: mongoose.Schema.Types.ObjectId, ref:'user'},
    courseid: {type: mongoose.Schema.Types.ObjectId, ref: 'course'}
});

module.exports = mongoose.model('purchase', purchaseSchema);