import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    require: [true, 'Please add your name'],
    trim: true,
    maxLength: [20, 'Your name is up to 20 chars long']
  },
  account: {
    type: String,
    require: [true, "Please add your email or phone"],
    trim: true,
    unique: true
  },
  password: {
    type: String,
    require: [true, "Please add your password"],
    trim: true
  },
  avatar: {
    type: String,
    default: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Windows_10_Default_Profile_Picture.svg/2048px-Windows_10_Default_Profile_Picture.svg.png'
  },
  role: {
    type: String,
    default: 'user'
  },
  type: {
    type: String,
    default: 'normal'
  }
}, {
  timestamps: true
}) 

export default mongoose.model('User', userSchema)