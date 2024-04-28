// Endpoints: /users/:username/mountains/

// All below are dynamic routes

import express from "express";
import multer from "multer";
import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import UserModel from "../models/UserModel.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// mergeParams: to access the username parameter from the parent route (UserRouter)
const router = express.Router({ mergeParams: true }); 

// Set up storage engine with dynamic path based on username
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        const { username } = req.params;
        const dirPath = path.join(__dirname, "..", "User", username);

        cb(null, dirPath);
    },
    filename: function (req, file, cb) {
        const { mountainId } = req.params;
        const fileExtension = path.extname(file.originalname); // .jpg
        cb(null, `${mountainId}${fileExtension}`); // save image
    }
});

const upload = multer({ storage: storage });

// get all mountain information
router.get("/", async (req, res) => {
    const { username } = req.params;

    try {
        const user = await UserModel.findOne({ username: username }, 'mountains');
        if (!user) {
            return res.status(404).json({ success: false, message: 'User not found' });
        }
        res.status(200).json(user.mountains);
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
})


// update a mountain's checked status for the specific user
router.put("/update/:mountainId", async (req, res) => {
    const { username, mountainId } = req.params;
    const { checked } = req.body;

    try {
        // Update the specific mountain's checked status for the given user
        const update = {
            $set: {
                "mountains.$[elem].checked": checked
            }
        };
        const options = {
            new: true, // To return the updated document
            arrayFilters: [{ "elem.id": mountainId }], // Filter to identify the correct mountain in the array
            projection: 'mountains' // Only return the mountains field
        };

        const user = await UserModel.findOneAndUpdate({ username: username }, update, options);
        if (!user) {
            return res.status(404).json({ success: false, message: 'User not found' });
        }

        // Find the updated mountain in the returned document to send as response
        const mountain = user.mountains.find(m => m.id === mountainId);
        if (!mountain) {
            return res.status(404).json({ success: false, message: 'Mountain not found' });
        }
        
        res.status(200).json({ success: true, message: 'Mountain checked status updated', mountain });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
})



// upload a new mountain
router.post("/upload/:mountainId", upload.single('image'), async (req, res) => {
    const { username, mountainId } = req.params;
    const { id, name, lat, lng, altitude, checked, info } = req.body;
    
    console.log(req.body)
    console.log(req.file)

    try {
        const user = await UserModel.findOne({ username: username })
        if (!user) {
            return res.status(404).json({ success: false, message: 'User not found' });
        }

        // Construct the mountain object with the data received
        const newMountain = {
            id: id,
            name: name,
            coordinates: {lat, lng},
            altitude: altitude,
            checked: checked,
            info: info,
            imageUrl: `${id}.jpg`,
        }

        // Add the new mountain to the user's mountains list
        user.mountains.push(newMountain);
        console.log("done uploading")

        // Save the updated user
        await user.save();

        res.status(201).json({ success: true, message: "Mountain added successfully", data: newMountain });
    } catch (error) {
        console.error("Error adding mountain:", error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
});


// delete a mountain
router.delete("/delete/", async (req, res) => {
    const { username, mountainName } = req.body

    try {
        const user = await UserModel.findOne({ username: username })
        if (!user) {
            return res.status(404).json({ success: false, message: 'User not found' });
        }

        const mountainIndex = user.mountains.findIndex(mtn => mtn.name == mountainName);
        console.log(mountainIndex)
        if (mountainIndex === -1) {
            return res.status(404).json({ success: false, message: 'Mountain not found' });
        }

        const mountainId = user.mountains[mountainIndex].id;
        const filePath = `${__dirname}/../User/${username}/${mountainId}.jpg`;
        console.log(filePath)

        // Remove the mountain from the list
        user.mountains.splice(mountainIndex, 1);

        // Save the updated user document
        await user.save();

        try {
            await fs.unlink(filePath);
            res.status(201).json({ success: true, message: "Mountain deleted successfully"});
        } catch (error) {
            console.error("Error deleting mountain:", error);
            res.status(500).json({ success: false, message: "Error deleting mountain" });
        }
    } catch (error) {
        console.error("Error deleting mountain:", error);
        res.status(500).json({ success: false, message: "Error deleting mountain" });
    }
})

export default router