const express = require('express');
const feedback = require('./data/feedback');

const app = express();

app.get('/', (req, res) => {
  res.send('API is running ...');
});

app.get('/api/feedback', (req, res) => {
  res.json(feedback);
});

app.get('/api/feedback/:id', (req, res) => {
  const feedbackItem = feedback.find((f) => f._id === req.params.id);
  res.json(feedbackItem);
});

app.listen(5000, console.log('Server running on port 5000'));
