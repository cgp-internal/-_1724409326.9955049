const express = require('express');
const router = express.Router();
const { handleFlightRequest } = require('./controllers/flightRequests');
const { FlightRequest } = require('./models/flightRequest');

router.post('/requests', handleFlightRequest);

module.exports = router;