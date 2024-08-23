const express = require('express');
const app = express();
const { flightRequestsRouter } = require('./routes/api');

app.use(express.json());
app.use('/api', flightRequestsRouter);

const port = 3000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});