import express from 'express';
import usersModel from '../models/usersModel.js'
import jwt from "jsonwebtoken";
import bcrypt from 'bcryptjs';
import validator from 'validator';

const JWT_SECRET = "@Hxd60Clh@123"
 

// perfectly working
// login User
// const loginUser = async (req, res) => {
//     const {email, password} = req.body;
//     try {
//         const user = await usersModel.findOne({ email });
//         if(!user){
//             return res.json({success: false, message: "User Does not exist"})
//         }
//         // if (!user || !bcrypt.compareSync(password, user.password)) {
//         //     return res.status(401).json({ message: 'Invalid email or password' });
//         // }
        
//         const isMatch = await bcrypt.compare(password, user.password);
//         if (!isMatch) {
//             return res.json({success: false, message: "Invalid Credentials"})
//         }

//         const token = jwt.sign(
//             { userId: user._id, role: user.role },
//             JWT_SECRET,
//         );
        
//         res.json({success: true, token})

//     } catch (error) {
//         console.log(error);
//         res.json({success: false, message: "Error in Login User"})   
//     }
// }


// // register User
// // perfectly working
// const saltRounds = 10;
// const registerUser = async (req, res) => {
//     const { name, email, password, role } = req.body;

//     if (!name || !email || !password || !role) {
//         return res.status(400).json({ message: 'All fields are required' });
//     }

//     if (!['admin', 'manager', 'faculty head', 'department head', 'research individual'].includes(role)) {
//         return res.status(400).json({ message: 'Invalid role' });
//     }
    
//     try {

//         const existingUser = await usersModel.findOne({ email });
//         if (existingUser) {
//             return res.status(400).json({ message: 'User already exists' });
//         }
//         const hashedPassword = await bcrypt.hash(password, saltRounds);


            
//         const newUser = new usersModel({
//             name: name,
//             email: email, 
//             password: hashedPassword,
//             role: role
//         })

//         const user = await newUser.save();

//         const token = jwt.sign(
//             { userId: user._id, role: user.role },
//             JWT_SECRET,
//         );

//         res.json({success: true, status: 201, message: "User registered Successfully", token})

//     } catch (error) {
//         console.log(error)
//         res.json({success: false, message: 'User registration failed'})
//     }

// }


// const loginUser = async (req, res) => {
//     const {username, password} = req.body;
//     try {
//         const user = await usersModel.findOne({ username });
//         if(!user){
//             return res.json({success: false, message: "User Does not exist"})
//         }
//         // if (!user || !bcrypt.compareSync(password, user.password)) {
//         //     return res.status(401).json({ message: 'Invalid email or password' });
//         // }
        
//         const isMatch = await bcrypt.compare(password, user.password);
//         if (!isMatch) {
//             return res.json({success: false, message: "Invalid Credentials"})
//         }

//         const token = jwt.sign(
//             { userId: user._id, role: user.role },
//             JWT_SECRET,
//         );
        
//         res.json({success: true, token})

//     } catch (error) {
//         console.log(error);
//         res.json({success: false, message: "Error in Login User"})   
//     }
// }


// // register User
// // perfectly working
// const saltRounds = 10;
// const registerUser = async (req, res) => {
//     const { name, email, username, password, role, department } = req.body;

//     if (!name || !email || !password || !role || !username || !department) {
//         return res.status(400).json({ message: 'All fields are required' });
//     }

//     if (!['admin', 'manager', 'faculty head', 'department head', 'research individual'].includes(role)) {
//         return res.status(400).json({ message: 'Invalid role' });
//     }
    
//     try {

//         const existingUser = await usersModel.findOne({ username });
//         if (existingUser) {
//             return res.status(400).json({ message: 'User already exists' });
//         }
//         const hashedPassword = await bcrypt.hash(password, saltRounds);


            
//         const newUser = new usersModel({
//             name: name,
//             username: username,
//             email: email,
//             password: hashedPassword,
//             role: role,
//             department: department,
//         })

//         const user = await newUser.save();

//         const token = jwt.sign(
//             { userId: user._id, role: user.role },
//             JWT_SECRET,
//         );

//         res.json({success: true, status: 201, message: "User registered Successfully", token})

//     } catch (error) {
//         console.log(error)
//         res.json({success: false, message: 'User registration failed'})
//     }
// }



// export {registerUser, loginUser};


// controllers/userController.js
import User from '../models/userModels.js';
import allowedRoles from '../config/roles.js';


// Create a new user
// export const createUser = async (req, res) => {
//     try {
//       const { username, password, role } = req.body;
//       if (req.user.role === 'admin' || (req.user.role === 'manager' && role !== 'admin')) {
//         const user = new User({ username, password, role });
//         await user.save();
//         res.status(201).json(user);
//       } else {
//         res.status(403).json({ message: 'Not authorized to create user.' });
//       }
//     } catch (error) {
//       res.status(500).json({ message: error.message });
//     }
//   };
export const createUser = async (req, res) => {
  const { name, username, password, role, department, email } = req.body;
  const { role: userRole } = req.user; 

  if( !allowedRoles[userRole].includes(role)) {
    return res.status(403).json({ message: 'You do not have permission to create this role'})
  }

  try {

    //checks if the username already exist
    const existingUser = await User.findOne({ username });
    if(existingUser) {
      return res.status(400).json({ message: 'User already exists'});
    }


    const newUser = new User({ name, username, password, role, department, email });
    await newUser.save();
    res.status(201).json({ message: `${role} user created successfully`, role });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};
  
  // Update an existing user
  export const updateUser = async (req, res) => {
    try {
      const { id } = req.params;
      const { role } = req.body;

      // Check if the user exists
    const userToUpdate = await User.findById(id);
    if (!userToUpdate) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Check if the current user is allowed to assign the new role
    const currentUserRole = req.user.role;
    if (req.body.role) {
      const rolesAllowed = allowedRoles[currentUserRole] || [];
      if (!rolesAllowed.includes(req.body.role)) {
        return res.status(403).json({ message: 'You do not have permission to assign this role' });
      }
    }

    // Update the user
    const updatedUser = await User.findByIdAndUpdate(id, req.body, { new: true });
    res.status(200).json(updatedUser);

    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  
 
  // controllers/userController.js

// Delete a user
// export const deleteUser = async (req, res) => {
//   try {
//     const { id } = req.params;

//     // Find the user to be deleted
//     const userToDelete = await User.findById(id);
//     if (!userToDelete) {
//       return res.status(404).json({ message: 'User not found' });
//     }

//     // Role-based deletion logic
//     const currentUserRole = req.user.role;
//     const userRoleToDelete = userToDelete.role;

//     // Define role-based permission
//     const rolePermissions = {
//       admin: ['admin', 'manager', 'facultyHead', 'deptHead', 'researcher'],
//       manager: ['manager', 'facultyHead', 'deptHead', 'researcher'],
//       facultyHead: ['facultyHead', 'deptHead', 'researcher'],
//       deptHead: ['deptHead', 'researcher'],
//       researcher: [] // Researchers cannot delete
//     };

//     // Check if the user has permission to delete the target user
//     const allowedRoles = rolePermissions[currentUserRole] || [];
//     if (!allowedRoles.includes(userRoleToDelete)) {
//       return res.status(403).json({ message: 'You do not have permission to delete this user' });
//     }

//     // Perform the deletion
//     await User.findByIdAndDelete(id);
//     res.status(204).end();
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// controllers/userController.js

// Delete a user
// controllers/userController.js

// Delete a user
// controllers/userController.js

// Delete a user
export const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const userToDelete = await User.findById(id);

    // Ensure the user to delete exists
    if (!userToDelete) {
      return res.status(404).json({ message: 'User not found.' });
    }

    // Check roles and permissions
    if (req.user.role === 'admin') {
      // Admin can delete any user
      await User.findByIdAndDelete(id);
      return res.status(204).end();
    }

    if (req.user.role === 'manager') {
      // Manager can delete users with role 'facultyhead', 'depthead', 'researcher'
      if (['facultyHead', 'deptHead', 'researcher'].includes(userToDelete.role)) {
        await User.findByIdAndDelete(id);
        return res.status(204).json({message : `${userToDelete.role} has been delete successfully`});
      } else {
        return res.status(403).json({ message: 'Not authorized to delete this user.' });
      }
    }

    if (req.user.role === 'facultyHead') {
      // FacultyHead can delete users with role 'depthead', 'researcher'
      if (['deptHead', 'researcher'].includes(userToDelete.role)) {
        await User.findByIdAndDelete(id);
        return res.status(204).json({message : `${userToDelete.role} has been delete successfully`}).end();
      } else {
        return res.status(403).json({ message: 'Not authorized to delete this user.' });
      }
    }

    if (req.user.role === 'deptHead') {
      // DeptHead can only delete 'researcher'
      if (userToDelete.role === 'researcher') {
        await User.findByIdAndDelete(id);
        return res.status(204).json({message : `${userToDelete.role} has been delete successfully`}).end();
      } else {
        return res.status(403).json({ message: 'Not authorized to delete this user.' });
      }
    }

    // Researcher cannot delete any user
    if (req.user.role === 'researcher') {
      return res.status(403).json({ message: 'Not authorized to delete any user.' });
    }

    // Default response for unauthorized roles
    return res.status(403).json({ message: 'Not authorized to delete user.' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};



  
  // Get a single user's details
  export const getUser = async (req, res) => {
    try {
      if (req.user.role === 'admin' || req.user._id === req.params.id) {
        const user = await User.findById(req.params.id);
        res.status(200).json(user);
      } else {
        res.status(403).json({ message: 'Not authorized to view this user.' });
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  
  // Get all users
 // Get all users
export const getAllUsers = async (req, res) => {
  try {
    const currentUserRole = req.user.role;

    // Define role-based permissions for viewing users
    const rolePermissions = {
      admin: ['admin', 'manager', 'facultyHead', 'deptHead', 'researcher'],
      manager: ['manager', 'facultyHead', 'deptHead', 'researcher'],
      facultyHead: ['facultyHead', 'deptHead', 'researcher'],
      deptHead: ['deptHead', 'researcher'],
      researcher: [] // Researchers cannot view other users
    };

    // Determine which roles can be viewed by the current user
    const allowedRoles = rolePermissions[currentUserRole] || [];

    // Fetch all users based on role permissions
    let users;
    if (currentUserRole === 'admin') {
      users = await User.find();
    } else if (allowedRoles.length > 0) {
      users = await User.find({ role: { $in: allowedRoles } });
    } else {
      users = [];
    }

    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};





