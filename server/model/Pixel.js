const mongoose = require('mongoose');

const pixelSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    design: {
        type: [String],
        required: true,  
    },
  });

  const Pixel = mongoose.model('Pixel', pixelSchema);

  module.exports = Pixel;
