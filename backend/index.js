const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const userRoute = require("./routes/userRoutes");
const corsOption = require("./utils/corsOption");
const mongoose = require("mongoose"); // Missing mongoose import
const connect = require("./config/db")
require("dotenv").config();

// Initialize Express
const app = express();

// Middleware
app.use(cors(corsOption));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use("/auth", userRoute);

// Global Error Handler
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: "Something went wrong!" });
});

// Database Connection
connect();

// Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`App is running on http://localhost:${PORT}`);
    console.log('Environment Variable:', process.env.MONGO_URI);

});
