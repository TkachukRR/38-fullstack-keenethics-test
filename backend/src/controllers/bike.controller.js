const Bike = require('../models/bike.model');

const TEXT_FIELD_MIN_LENGTH = 5;

exports.createBike = async (req, res) => {
  try {
    const { ID, name, type, color, wheelSize, price, description } = req.body;

    //check empty fields
    if (!ID || !name || !type || !color || !wheelSize || !price) {
      return res.status(400).json({ error: 'All fields are required.' });
    }

    //check number fields
    if (
      typeof ID !== 'number' ||
      typeof wheelSize !== 'number' ||
      typeof price !== 'number'
    ) {
      return res
        .status(400)
        .json({ error: 'All number fields should accept only the number.' });
    }

    //check text fields length
    if (
      name.length < TEXT_FIELD_MIN_LENGTH ||
      type.length < TEXT_FIELD_MIN_LENGTH ||
      color.length < TEXT_FIELD_MIN_LENGTH ||
      description.length < TEXT_FIELD_MIN_LENGTH
    ) {
      return res.status(400).json({
        error: `All text fields minimum length should be ${TEXT_FIELD_MIN_LENGTH} characters`,
      });
    }

    //check bike ID
    const existingBike = await Bike.findOne({ ID });
    if (existingBike) {
      return res.status(400).json({ error: `This bike ${ID} already exists.` });
    }

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
