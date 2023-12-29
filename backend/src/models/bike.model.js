const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bikeSchema = new Schema({
  ID: {
    type: Number,
    required: true,
    unique: true,
    sparse: true,
  },
  name: {
    type: String,
    required: true,
    minlength: 5,
  },
  type: {
    type: String,
    required: true,
    minlength: 5,
  },
  color: {
    type: String,
    required: true,
    minlength: 5,
  },
  wheelSize: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
    minlength: 5,
  },
  status: {
    type: String,
    enum: ['available', 'busy', 'unavailable'],
    default: 'available',
  },
});

const Bike = mongoose.model('Bike', bikeSchema);

module.exports = Bike;
