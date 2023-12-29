const Bike = require('../models/bike.model');
const { validateCreateBike } = require('../utils/validators');

exports.createBike = async (req, res) => {
  try {
    const validationError = await validateCreateBike(req.body);

    if (validationError) {
      return res.status(400).json(validationError);
    }

    const newBike = new Bike(req.body);

    await newBike.save();
    res.status(201).json(newBike);
  } catch (error) {
    console.error('Creating bike database error:', error.message);
    res
      .status(500)
      .json({ error: `Creating bike database error: ${error.message}` });
  }
};

exports.getAllBikes = async (req, res) => {
  try {
    const bikes = await Bike.find();

    res.status(200).json(bikes);
  } catch (error) {
    console.error('Getting bikes database error:', error.message);
    res
      .status(500)
      .json({ error: `Getting bikes database error: ${error.message}` });
  }
};

exports.removeBikeById = async (req, res) => {
  try {
  } catch (error) {}
};

exports.changeBikeStatus = async (req, res) => {
  try {
  } catch (error) {}
};

exports.getBikesStats = async (req, res) => {
  try {
  } catch (error) {}
};
