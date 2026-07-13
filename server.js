const express = require("express");

const authRoutes = require("./authRoutes");
const taskRoutes = require("./taskRoutes");

// Database Connection
require("./db");

const app = express();

// Middleware
app.use(express.json());

// Default Route
app.get("/", (req, res) => {
    res.json({
        success: true,
        message: "Task Manager REST API is Running"
    });
});

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/tasks", taskRoutes);

// 404 Route
app.use((req, res) => {
    res.status(404).json({
        success: false,
        message: "Route Not Found"
    });
});

// Server
const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
