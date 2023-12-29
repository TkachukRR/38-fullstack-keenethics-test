const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { BIKE_STATUS_ENUM } = require('../enums');

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
    enum: BIKE_STATUS_ENUM,
    default: BIKE_STATUS_ENUM.at(0),
  },
});

const Bike = mongoose.model('Bike', bikeSchema);

module.exports = Bike;
