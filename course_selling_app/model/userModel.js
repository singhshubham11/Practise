const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    email: {type: String, unique: true},
    password: {type: String, required: true},
    firstName: {type: String},
    lastName: {type: String}
});

userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) {
        return next();
    }
    try {
        this.password = await bcrypt.hash(this.password, 10);
        next();
    } catch (error) {
        next(new Error('Password hashing failed: ' + error.message));
    }
})

module.exports = mongoose.model('user',userSchema);