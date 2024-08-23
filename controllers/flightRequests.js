const { processFlightRequest } = require('./services/flightRequestService');

const handleFlightRequest = async (req, res) => {
  try {
    const response = await processFlightRequest(req.body);
    res.status(201).json(response);
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

module.exports = { handleFlightRequest };