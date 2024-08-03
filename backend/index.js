import express from 'express';
import cors from "cors"
import { connectDB } from "./config/db.js"
import userRouter from "./routes/userRoute.js"
import 'dotenv/config'
import researchRouter from './routes/researchRoutes/index.js';
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


// api Endpoints :
app.use("/api/user", userRouter)
app.use("/api/research", researchRouter)

// get method is the http method we can request the data from server
app.get("/", (req, res)=>{
    res.send("API Working")
})

app.listen(port, ()=>{
    console.log(`Server Started At http://localhost:${port}`)
})


// import express from 'express';
// import cors from 'cors';
// import connectToMongo from './db';



// connectToMongo();
// const app = express()
// const port = 5000

// app.use(cors())


// // Middleware
// app.use(express.json())


// // Available Routes
// // app.use('/api/auth', require('./routes/auth'));
// app.use()

// // app.get('/', (req, res) => {
// //   res.send('Hello Tajamul!')
// // })


// app.listen(port, () => {
//   console.log(`ORIC Backend listening on port ${port}`)
// })
