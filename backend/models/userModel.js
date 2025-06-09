import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const userSchema = new mongoose.Schema({
  name: { // Нэр
    type: String,
    required: true,
    trim: true
  },
  phone: { // Утасны дугаар
    type: String,
    required: true,
    trim: true
  },
  email: { // И-мэйл
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true
  },
  password: { // Нууц үг
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const User = mongoose.model('User', userSchema);
export default User;

