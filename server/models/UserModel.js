import mongoose from "mongoose";
import mountainSchema from "./MountainModel.js";

// Define user schema (User collection)
const userSchema = new mongoose.Schema({ 
    username: String,
    password: String,
    // Embedding Mountain schema, storing all the mountain data 
    // directly within each user document
    mountains: [mountainSchema] 
});

// Create user model
const UserModel = mongoose.model("User", userSchema);

export default UserModel