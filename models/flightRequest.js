const mongoose = require('mongoose');

const flightRequestSchema = new mongoose.Schema({
  requestType: {
    type: String,
    required: true
  },
  Departure: {
    type: String,
    required: true
  },
  Arrival: {
    type: String,
    required: true
  },
  DepartureTime: {
    type: Date,
    required: true
  },
  ArrivalTime: {
    type: Date,
    required: true
  },
  polygonBoundaries: {
    type: Array,
    required: true
  }
});

const FlightRequest = mongoose.model('FlightRequest', flightRequestSchema);

module.exports = { FlightRequest };