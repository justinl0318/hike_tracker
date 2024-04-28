// Endpoints: /users/


import fs from "fs";
import path from "path";
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import express from "express";
import UserModel from "../models/UserModel.js";
import mountains_list from "../Assets/mountainslist.js";
import MountainRouter from "./MountainRouter.js"
const router = express.Router()
router.use(express.json())

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// List all users
router.get("/", async (req, res) => {
    try {
        // Select only the "username" field from each user
        const users = await UserModel.find({}).select("username -_id");
        res.status(200).json(users);
    } catch (error) {
        console.error("Error fetching usernames:", error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
});


// Register route
router.post("/register", async (req, res) => {
    const { username, password } = req.body;

    try {
        // Check if username already exists
        console.log("Registering:", username);
        const existingUser = await UserModel.findOne({ username });
        if (existingUser) {
            return res.status(400).json({ success: false, message: "Username already exists" });
        }

        // Create new user directory for images
        const userDir = path.join(__dirname, "..", "User", username);
        if (!fs.existsSync(userDir)){
            fs.mkdirSync(userDir, { recursive: true });
        }

        // Copy default images to new user directory and update URLs
        const defaultDir = path.join(__dirname, '..', 'Assets', 'Defaultimages');
        const updatedMountainsList = mountains_list.map(mountain => {
            const sourcePath = path.join(defaultDir, mountain.imageUrl); 
            const destPath = path.join(userDir, mountain.imageUrl);
            fs.copyFileSync(sourcePath, destPath); // Copy file
            return {
                ...mountain,
                imageUrl: `/User/${username}/${mountain.imageUrl}` // New URL path
            };
        });


        // Create new user to Database
        const newUser = new UserModel({ 
            username: username, 
            password: password,
            mountains: updatedMountainsList // default mountains list
        });
        await newUser.save();

        console.log("Account created successfully");
        res.json({ success: true, message: "Registration successful" });
    } catch (error) {
        console.error("Error during registration:", error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
});


// Login route
router.post("/login", async (req, res) => {
    const { username, password } = req.body;

    try {
        const user = await UserModel.findOne({ username });
        if (!user) {
            return res.status(401).json({ success: false, message: "User Not found" });
        }

        console.log(user.password, password)
        if (user.password === password) {
            res.status(200).json({ success: true, message: "Login successful" });
        } else {
            res.status(401).json({ success: false, message: "Invalid Password" });
        }
    } catch (error) {
        console.error("Error during registration:", error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
})


// Delete a user
router.delete("/delete", async (req, res) => {
    const { username, password } = req.body;

    try {
        const user = await UserModel.findOne({ username });
        if (!user) {
            return res.status(404).json({ success: false, message: "User not found" });
        }

        console.log(username, password)
        // Check if the provided password matches the stored password
        if (user.password === password) {
            // Delete the user's directory synchronously
            const userDir = path.join(__dirname, '..', 'User', username); 
            if (fs.existsSync(userDir)) {  // Check if the directory exists
                fs.rmSync(userDir, { recursive: true, force: true });  // Delete the directory recursively
                console.log("User directory deleted successfully");
            }


            // Delete the user from the database
            await UserModel.deleteOne({ _id: user._id });
            console.log("Account deleted successfully");
            res.status(200).json({ success: true, message: "Account deleted successfully" });
        } else {
            res.status(401).json({ success: false, message: "Invalid password" });
        }
    } catch (error) {
        console.error("Error during account deletion:", error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
})


// Dynamic Endpoints for actions on mountains for specific user
router.use("/:username/mountains", MountainRouter);

export default router
