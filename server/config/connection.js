const mongoose = require('mongoose');
const { User, Pixel } = require('../model');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/pixelmath');
console.log('Connected to MongoDB');
}