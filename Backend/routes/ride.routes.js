const express = require('express')
const router = express.Router();
const { body } = require('express-validator');
const rideController = require('../controllers/ride.controller');
const authMiddleware = require('../middleware/auth.middleware');

router.post('/create',
    authMiddleware.authUser,  // Only authenticated users can create rides.
    body('pickup').isString().isLength({ min: 3 }).withMessage('invalid pick address'),
    body('destination').isString().isLength({ min: 3 }).withMessage('invalid destination address'),
    body('vehicleType').isString().isIn(['auto','car','motorcycle']).withMessage('invalid vehicle type'),
    rideController.createRide
)

module.exports = router;
