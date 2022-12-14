const express = require('express');
const axios = require('axios');

const app = express();
app.use(express.json());

app.post('/events', (req, res) => {
  const event = req.body;

  axios.post('http://localhost:4000/events');
  axios.post('http://localhost:4001/events');
  // axios.post('http://localhost:4002/events');

  res.send({ status: 'OK' });
});

PORT = 4005;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
