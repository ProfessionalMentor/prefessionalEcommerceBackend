import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true
    },
    username:{
        type: String,
        required: true,
        trim: true,
        unique:true,
        lowercase:true,
       
    },
    email: {
        type: String,
        required: true,
        unique:true
    },
    password: {
        type: String,
        required: true
    },
    phone:{
        type: Number,
        requuired: true,
        
    }
});




const userRegister = mongoose.model("userRegister", userSchema);

export default userRegister;