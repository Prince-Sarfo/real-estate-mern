import mongoose from "mongoose";



// Schema for the User model (collection in mongodb)
const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        unique: true,
        minlength: 3,
    },
    email:{
        type: String,
        required: true,
        unique: true,
    },
    password:{
        type: String,
        required: true,
        minlength: 8,
    },
}, { timestamps: true });
    

// Model for the User model (collection in mongodb)
const userModel = mongoose.model("User", userSchema);

export default userModel;
