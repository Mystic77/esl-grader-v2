import mongoose from 'mongoose';

const UserSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  feedback: [
    {
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
    },
  ],
});

const User = mongoose.model('User', UserSchema);

export default User;
