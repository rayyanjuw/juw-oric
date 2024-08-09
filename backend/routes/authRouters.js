import express from 'express'
import {login }from '../controllers/authControllers.js'

const router = express.Router();

// Define the login route
router.post('/login', login);

export default router;