const Bike = require('../models/bike.model');
const {
  validateCreateBike,
  validateDeleteBike,
} = require('../utils/validators');
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
    const bikeId = req.params.id;
    const validationError = await validateDeleteBike(bikeId);

    if (validationError) {
      return res.status(404).json(validationError);
    }

    await Bike.deleteOne();

    res
      .status(200)
      .json({ message: `Bike with ID ${bikeId} - removed successfully.` });
  } catch (error) {
    handleError(res, error, 500, 'Removing bike database error');
  }
};

exports.changeBikeStatus = async (req, res) => {
  try {
  } catch (error) {}
};

exports.getBikesStats = async (req, res) => {
  try {
  } catch (error) {}
};
