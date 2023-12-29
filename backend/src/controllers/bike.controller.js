const Bike = require('../models/bike.model');

exports.createBike = async (req, res) => {
  try {
    const { ID, name, type, color, wheelSize, price, description } = req.body;

    const newBike = new Bike({
      ID,
      name,
      type,
      color,
      wheelSize,
      price,
      description,
    });

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
  } catch (error) {}
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
