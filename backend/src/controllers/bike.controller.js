const Bike = require('../models/bike.model');
const { validateCreateBike } = require('../utils/validators');
const { handleError } = require('../controllers/error.controller');

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
    handleError(res, error, 500, 'Creating bike database error');
  }
};

exports.getAllBikes = async (req, res) => {
  try {
    const bikes = await Bike.find();

    res.status(200).json(bikes);
  } catch (error) {
    handleError(res, error, 500, 'Getting bikes database error');
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
