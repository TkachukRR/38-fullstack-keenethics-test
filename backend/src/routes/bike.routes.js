const { Router } = require('express');
const bikeController = require('../controllers/bike.controller');
const router = Router();

router.post('/bikes/create', bikeController.createBike);
router.get('/bikes/all', bikeController.getAllBikes);
router.delete('/bikes/delete/:id', bikeController.removeBikeById);

router.put('/bikes/:id/status', bikeController.changeBikeStatus);

router.get('/bikes/stats', bikeController.getBikesStats);

module.exports = router;
