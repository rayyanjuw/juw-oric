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


const loginUser = async (req, res) => {
    const {username, password} = req.body;
    try {
        const user = await usersModel.findOne({ username });
        if(!user){
            return res.json({success: false, message: "User Does not exist"})
        }
        // if (!user || !bcrypt.compareSync(password, user.password)) {
        //     return res.status(401).json({ message: 'Invalid email or password' });
        // }
        
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.json({success: false, message: "Invalid Credentials"})
        }

        const token = jwt.sign(
            { userId: user._id, role: user.role },
            JWT_SECRET,
        );
        
        res.json({success: true, token})

    } catch (error) {
        console.log(error);
        res.json({success: false, message: "Error in Login User"})   
    }
}


// register User
// perfectly working
const saltRounds = 10;
const registerUser = async (req, res) => {
    const { name, email, username, password, role, department } = req.body;

    if (!name || !email || !password || !role || !username || !department) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    if (!['admin', 'manager', 'faculty head', 'department head', 'research individual'].includes(role)) {
        return res.status(400).json({ message: 'Invalid role' });
    }
    
    try {

        const existingUser = await usersModel.findOne({ username });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }
        const hashedPassword = await bcrypt.hash(password, saltRounds);


            
        const newUser = new usersModel({
            name: name,
            username: username,
            email: email,
            password: hashedPassword,
            role: role,
            department: department,
        })

        const user = await newUser.save();

        const token = jwt.sign(
            { userId: user._id, role: user.role },
            JWT_SECRET,
        );

        res.json({success: true, status: 201, message: "User registered Successfully", token})

    } catch (error) {
        console.log(error)
        res.json({success: false, message: 'User registration failed'})
    }
}



export {registerUser, loginUser};






