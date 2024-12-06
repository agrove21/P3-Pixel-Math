//User model
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    pixels: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Pixel',
        },
    ],
    });
userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) {
        return next();
    }
    this.password = await bcrypt.hash(this.password, 10);
    next();
});
userSchema.methods.comparePassword = async function (password) {
    return bcrypt.compare(password, this.password);
};
const User = mongoose.model('User', userSchema);
module.exports = User;
