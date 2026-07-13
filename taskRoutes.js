module.exports={};
const express = require("express");
const router = express.Router();

const auth = require("../middleware/auth");

const {
    createTask,
    getTasks,
    getTaskById,
    updateTask,
    deleteTask
} = require("../controllers/taskController");

// Create Task
router.post("/", auth, createTask);

// Get All Tasks
router.get("/", auth, getTasks);

// Get Task By ID
router.get("/:id", auth, getTaskById);

// Update Task
router.put("/:id", auth, updateTask);

// Delete Task
router.delete("/:id", auth, deleteTask);

module.exports = router;
