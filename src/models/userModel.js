import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide a username"],
    unique: true,
  },
  email: {
    type: String,
    required: [true, "Please provide an email"],
    unique: true,
  },
  passwordHash: {
    type: String,
    required: [true, "Please provide a password"],
  },
  confirmPasswordHash: {
    type: String,
    // required: [true, "Please provide a password"],
  },
  phone: {
    type: String,
    // required: true,
  },
  image: {
    type: String,
    default: "",
  },
  street: {
    type: String,
    default: "",
  },
  city: {
    type: String,
    default: "",
  },
  country: {
    type: String,
    default: "",
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  isVerified: { type: Boolean, default: false },
  forgotPasswordToken: String,
  forgotPasswordTokenExpiry: Date,
  verifyToken: String,
  verifyTokenExpiry: Date,
});

const User = mongoose.models.users || mongoose.model("users", userSchema);

export default User;
