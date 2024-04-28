import express from "express";
import cors from "cors"
import mongoose from "mongoose";
import UserRouter from "./routes/UserRouter.js"

const PORT = 5000

// collection in nosql = table in sql
// document in nosql = a row in a table in sql

// Initialize Express app
const app = express();
app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/hike_tracker", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
const db = mongoose.connection;

app.use("/users", UserRouter)

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))
