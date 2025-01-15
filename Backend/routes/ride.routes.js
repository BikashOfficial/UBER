const express = require('express')
const router = express.Router();
const { body,query} = require('express-validator');
//note----------------------------------------------------------------
//for post use body and for get use query

const rideController = require('../controllers/ride.controller');
const authMiddleware = require('../middleware/auth.middleware');

router.post('/create',
    authMiddleware.authUser,  // Only authenticated users can create rides.
    body('pickup').isString().isLength({ min: 3 }).withMessage('invalid pickup address'),
    body('destination').isString().isLength({ min: 3 }).withMessage('invalid destination address'),
    body('vehicleType').isString().isIn(['auto', 'car', 'motorcycle']).withMessage('invalid vehicle type'),
    rideController.createRide
)

router.get('/get-fare',
    authMiddleware.authUser,
    query('pickup').isString().isLength({ min: 3 }).withMessage('invalid pickup address'),
    query('destination').isString().isLength({ min: 3 }).withMessage('invalid destination address'),
    rideController.getFare
)

module.exports = router;
