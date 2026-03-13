const express = require('express');
const router = express.Router();

const { authMiddleware } = require('../middleWare/authmiddleware');
const { bookingValidation } = require('../middleWare/bookingMiddleware');
const { seatAvailabilityMiddleware } = require('../middleWare/seatAvailability');
const { createBooking } = require('../controller/bookingController');



console.log({
  authMiddleware: typeof authMiddleware,
  bookingValidation: typeof bookingValidation,
  seatAvailabilityMiddleware: typeof seatAvailabilityMiddleware,
  createBooking: typeof createBooking,
});
router.post(
     '/book',
     authMiddleware,
     bookingValidation,
     seatAvailabilityMiddleware,
     createBooking
);
 


module.exports = router;
 
