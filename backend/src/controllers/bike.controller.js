const Bike = require('../models/bike.model');
const {
  validateCreateBike,
  validateDeleteBike,
  validateChangeBikeStatus,
} = require('../utils/validators');
const { handleError } = require('../controllers/error.controller');
const { BIKE_STATUS_ENUM } = require('../enums');

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
    const bikeId = req.params.id;
    const newStatus = req.body.status;
    const validationError = await validateChangeBikeStatus(bikeId, newStatus);

    if (validationError) {
      return res.status(400).json(validationError);
    }

    await Bike.findOneAndUpdate(
      { ID: bikeId },
      { $set: { status: newStatus } },
      { new: true },
    );

    res.status(200).json({
      message: `Bike with ID - ${bikeId} status updated to ${newStatus} successfully.`,
    });
  } catch (error) {
    handleError(res, error, 500, 'Changing bike status database error');
  }
};

exports.getBikesStats = async (req, res) => {
  try {
    const totalBikesQuantity = await Bike.countDocuments();
    const availableBikesQuantity = await Bike.countDocuments({
      status: BIKE_STATUS_ENUM.AVAILABLE,
    });
    const bookedBikesQuantity = await Bike.countDocuments({
      status: BIKE_STATUS_ENUM.BUSY,
    });
    const averageBookingPrice = await Bike.aggregate([
      {
        $group: {
          _id: null,
          averagePrice: { $avg: '$price' },
        },
      },
    ]);

    const stats = {
      totalBikesQuantity,
      availableBikesQuantity,
      bookedBikesQuantity,
      averageBookingPrice:
        averageBookingPrice.length > 0
          ? averageBookingPrice[0].averagePrice
          : 0,
    };

    res.status(200).json(stats);
  } catch (error) {
    handleError(res, error, 500, 'Getting bikes stats error');
  }
};
