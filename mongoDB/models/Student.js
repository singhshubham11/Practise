const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    studentName: {type: String, required: true},
    age: {type: String, required: true},
    school: {type: mongoose.Schema.Types.ObjectId, ref: 'schools'}
});

const studentModel = mongoose.model('students', studentSchema);

module.exports = studentModel;