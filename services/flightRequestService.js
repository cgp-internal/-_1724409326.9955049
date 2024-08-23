const { FlightRequest } = require('./models/flightRequest');

const processFlightRequest = async (request) => {
  try {
    const newFlightRequest = new FlightRequest(request);
    await newFlightRequest.save();
    return { message: 'Flight request successfully created' };
  } catch (error) {
    return { message: 'Error creating flight request', error: error.message };
  }
};

module.exports = { processFlightRequest };