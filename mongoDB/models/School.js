const mongoose = require('mongoose');

const schoolSchema = new mongoose.Schema({
    schoolName: {type: String, required: true},
    location: {type: String, required: true},
    principal: {type: String, required: true}
});

const schoolModel = mongoose.model('schools', schoolSchema);

module.exports = schoolModel;