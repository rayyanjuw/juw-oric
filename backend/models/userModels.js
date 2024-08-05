// // models/User.js
// import mongoose from 'mongoose';
// import bcrypt from bcrypt;


// const userSchema = new mongoose.Schema({
//   username: { type: String, required: true, unique: true },
//   password: { type: String, required: true },
//   role: { 
//     type: String,
//     enum: ['admin', 'manager', 'facultyHead', 'deptHead', 'researcher'],
//     required: true
//   },
//   // other fields as needed
// });

// const User = mongoose.model('User', userSchema);
// export default User ;


// models/userModels.js
import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  username: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  role: { type: String, required: true },
  department: { type: String },
  email: { type: String, unique: true, required: true }
});

// Hash the password before saving
userSchema.pre('save', async function (next) {
  if (this.isModified('password')) {
    this.password = await bcrypt.hash(this.password, 10);
  }
  next();
});

// Method to check password
userSchema.methods.comparePassword = function (password) {
  return bcrypt.compare(password, this.password);
};

const User = mongoose.model('User', userSchema);
export default User;
