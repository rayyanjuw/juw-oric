import express from 'express';
import cors from "cors"
import { connectDB } from "./config/db.js"
import userRouter from "./routes/userRoute.js"
import 'dotenv/config'
// import authenticate from './middleware/auth.js';
import authRouter from './routes/authRouters.js'
import publicationRoutes from './routes/publicationsRoutes.js';

// const User = require('./models/User');
// const Research = require('./models/Research');

// app config
const app = express()
const port = 5000

// middleware
app.use(express.json()) // whenever we get request from frontend to backend that will be parse using this json
app.use(cors()) // can access the backend from any frontend


// db connection
connectDB();

// app.use(authenticate);

// api Endpoints :
app.use("/api/user", userRouter)
app.use('/api/auth', authRouter)
// Use routes
app.use('/api/publications', publicationRoutes);
// app.use("/api/research", researchRouter)

// get method is the http method we can request the data from server
app.get("/", (req, res)=>{
    res.send("API Working")
})

app.listen(port, ()=>{
    console.log(`Server Started At http://localhost:${port}`)
})

