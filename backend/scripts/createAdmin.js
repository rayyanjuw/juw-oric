// scripts/createAdmin.js
import mongoose from 'mongoose';
import User from '../models/userModels.js'; // Adjust the path as needed

const createAdmin = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/ORIC');

    const admin = new User({
      name: 'Admin User',
      username: 'admin',
      password: 'admin', // Make sure this password is hashed in your actual implementation
      role: 'admin',
      email: 'admin@example.com'
    });

    await admin.save();
    console.log('Admin user created');
    mongoose.connection.close();
  } catch (error) {
    console.error('Error creating admin:', error);
  }
};

createAdmin();
