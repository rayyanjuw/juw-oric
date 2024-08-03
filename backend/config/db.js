import mongoose from 'mongoose';
const mongoURI = "mongodb://localhost:27017/ORIC"



export const connectDB = async () =>{
    await mongoose.connect(mongoURI).then(()=>console.log("DB Connected"));
}


