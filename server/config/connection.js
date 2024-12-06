const mongoose = require('mongoose');
const connection = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('Database connected');
    } catch (error) {
        console.log(error);
    }
}
module.exports = connection;