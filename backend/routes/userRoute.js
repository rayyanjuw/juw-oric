import express from 'express'
// import { registerUser, loginUser } from '../controllers/userController.js';


import authorize from '../middleware/authorize.js';
import authenticate from '../middleware/auth.js';
import * as userController from '../controllers/userController.js';




const router = express.Router();


// userRouter.post("/register", registerUser)
// userRouter.post("/login",  loginUser)

router.use(authenticate); 

// Admin or Manager or FacultyHead or DeptHead can create users
// router.post('/create', authorize(['admin', 'manager', 'facultyHead', 'deptHead']), userController.createUser);
router.post('/create', authenticate, authorize(['admin','manager', 'facultyHead', 'deptHead', 'researcher']), userController.createUser);

// Admin or Manager or FacultyHead or DeptHead can update users
router.put('/update/:id',authenticate, authorize(['admin', 'manager', 'facultyHead', 'deptHead']), userController.updateUser);

// Admin or Manager or FacultyHead or DeptHead can delete users
router.delete('/delete/:id', authorize(['admin', 'manager', 'facultyHead', 'deptHead']), userController.deleteUser);

// All roles can get their own data
router.get('/me', authorize(['admin', 'manager', 'facultyHead', 'deptHead', 'researcher']), userController.getUser);

router.get('/allUsers', authorize(['admin', 'manager', 'facultyHead', 'deptHead', 'researcher']), userController.getAllUsers )

// Admin or Manager can get all users
// router.get('/', authorize(['admin', 'manager']), userController.getAllUsers);





export default router;