import mongoose from 'mongoose';
const connectDB = async ()=> {
    
    mongoose.connection.on('connected', ()=> {
        console.log("MongoDB connected successfully...");
    })

    await mongoose.connect(process.env.MONGODB_URI);
}

export default connectDB;

//mongodb+srv://abdulkalamb23:E4h5QxKO5ayGX8p1@bgremover.fwcuoeg.mongodb.net/
//E4h5QxKO5ayGX8p1