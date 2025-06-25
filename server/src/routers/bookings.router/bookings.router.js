const express = require('express');
const { handleBookRestaurant, handleGetUserBookings } = require('./bookings.controller');
const bookingRouter = express.Router();
bookingRouter.post('/hotelreservation',handleBookRestaurant);
bookingRouter.get('/getbookings/:userid',handleGetUserBookings);

module.exports = bookingRouter;