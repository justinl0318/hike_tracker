import express from "express";
import cors from "cors"
import mongoose from "mongoose";
const PORT = 5000

// Initialize Express app
const app = express();
app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/my_database", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
const db = mongoose.connection;

// Define user schema
const userSchema = new mongoose.Schema({
    username: String,
    password: String
});

// Create user model
const User = mongoose.model("User", userSchema);

// Register route
app.post("/register", async (req, res) => {
    const { username, password } = req.body;
    try {
        // Check if username already exists
        console.log("register:", username, password)
        const existingUser = await User.findOne({ username });
        if (existingUser) {
            return res.status(400).json({ success: false, message: "Username already exists" });
        }

        // Create new user
        const newUser = new User({ username, password });
        await newUser.save();
        console.log("created account")
        res.json({ success: true, message: "Registration successful" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
});

// Login route
app.post("/login", async (req, res) => {
    const { username, password } = req.body;
    try {
        // Check if user exists
        console.log("login ", username, password )
        const user = await User.findOne({ username, password });
        if (!user) {
            return res.status(401).json({ success: false, message: "Invalid username or password" });
        }
        console.log("found user")
        res.json({ success: true, message: "Login successful" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
});


app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))
