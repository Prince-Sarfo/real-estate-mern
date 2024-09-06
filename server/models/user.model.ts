import mongoose from "mongoose";

// Interface for the User model (document in mongodb)
interface IUser extends mongoose.Document {
    name:{
        type: String,
        required: true,
        unique: true,
        minlength: 3,},

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
    timestamp: true,
}


// Schema for the User model (collection in mongodb)
const userSchema = new mongoose.Schema<IUser>({
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
const userModel = mongoose.model<IUser>("User", userSchema);

export default userModel;
