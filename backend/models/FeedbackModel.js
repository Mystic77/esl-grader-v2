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
  text: {
    type: Array,
  },
});

const Feedback = mongoose.model('Feedback', FeedbackSchema);

export default Feedback;
