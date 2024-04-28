import mongoose from "mongoose";

// Define mountain schema
const mountainSchema = new mongoose.Schema({
    id: Number,
    name: String,
    coordinates: {
        lat: Number,
        lng: Number
    },
    altitude: Number,
    checked: Boolean,
    info: String,
    imageUrl: String,
})

export default mountainSchema;
