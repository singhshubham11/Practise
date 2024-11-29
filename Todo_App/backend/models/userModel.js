const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    username: {type: String, required: true, minlength: 3, maxlength:30 },
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true}
});

userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) {
        return next(); // Skip if the password is not modified
    }

    try {
        this.password = await bcrypt.hash(this.password, 10); // Hash the password
        next();
    } catch (error) {
        next(error); // Pass the error to the next middleware
    }
});


module.exports = mongoose.model('User', userSchema);