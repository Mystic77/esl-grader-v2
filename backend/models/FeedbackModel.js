import mongoose from 'mongoose';

const FeedbackSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User',
  },
  category: {
    type: String,
    required: true,
  },
  0: {
    type: String,
    required: true,
  },
  1: {
    type: String,
    required: true,
  },
  2: {
    type: String,
    required: true,
  },
  3: {
    type: String,
    required: true,
  },
  4: {
    type: String,
    required: true,
  },
  5: {
    type: String,
    required: true,
  },
});

const Feedback = mongoose.model('Feedback', FeedbackSchema);

export default Feedback;
