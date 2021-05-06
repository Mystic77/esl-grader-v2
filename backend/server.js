import express from 'express';
import dotenv from 'dotenv';
import colors from 'colors';
import connectDB from './config/db.js';
import feedback from './data/feedback.js';

dotenv.config();

const app = express();

// Connect Database
connectDB();

// Init Middleware
app.use(express.json({ extended: false }));

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

// Define Routes
app.use('/api/users', require('./routes/api/userRoutes'));
app.use('/api/users', require('./routes/api/authRoutes'));
app.use('/api/users', require('./routes/api/profileRoutes'));
app.use('/api/users', require('./routes/api/postRoutes'));

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
);
