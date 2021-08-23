import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

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
      mainText: [String],
      commonErrors: [
        {
          name: {
            type: String,
            required: true,
          },
          text: {
            type: String,
            required: true,
          },
          include: {
            type: Boolean,
            default: false,
          },
        },
      ],
    },
  ],
});

UserSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

const User = mongoose.model('User', UserSchema);

export default User;
