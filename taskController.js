module.exports={};
const db = require("../config/db");

// Create Task
exports.createTask = (req, res) => {
    const { title, description } = req.body;
    const userId = req.user.id;

    if (!title) {
        return res.status(400).json({
            message: "Title is required"
        });
    }

    db.run(
        `INSERT INTO tasks (title, description, userId)
         VALUES (?, ?, ?)`,
        [title, description, userId],
        function (err) {
            if (err) {
                return res.status(500).json({
                    message: "Failed to create task"
                });
            }

            res.status(201).json({
                message: "Task created successfully",
                taskId: this.lastID
            });
        }
    );
};

// Get All Tasks
exports.getTasks = (req, res) => {
    const userId = req.user.id;

    db.all(
        "SELECT * FROM tasks WHERE userId = ?",
        [userId],
        (err, rows) => {
            if (err) {
                return res.status(500).json({
                    message: "Failed to fetch tasks"
                });
            }

            res.json(rows);
        }
    );
};

// Get Single Task
exports.getTaskById = (req, res) => {
    const { id } = req.params;
    const userId = req.user.id;

    db.get(
        "SELECT * FROM tasks WHERE id = ? AND userId = ?",
        [id, userId],
        (err, row) => {

            if (err) {
                return res.status(500).json({
                    message: "Database Error"
                });
            }

            if (!row) {
                return res.status(404).json({
                    message: "Task not found"
                });
            }

            res.json(row);
        }
    );
};

// Update Task
exports.updateTask = (req, res) => {
    const { id } = req.params;
    const { title, description, status } = req.body;
    const userId = req.user.id;

    db.run(
        `UPDATE tasks
         SET title = ?, description = ?, status = ?
         WHERE id = ? AND userId = ?`,
        [title, description, status, id, userId],
        function (err) {

            if (err) {
                return res.status(500).json({
                    message: "Failed to update task"
                });
            }

            if (this.changes === 0) {
                return res.status(404).json({
                    message: "Task not found"
                });
            }

            res.json({
                message: "Task updated successfully"
            });
        }
    );
};

// Delete Task
exports.deleteTask = (req, res) => {
    const { id } = req.params;
    const userId = req.user.id;

    db.run(
        "DELETE FROM tasks WHERE id = ? AND userId = ?",
        [id, userId],
        function (err) {

            if (err) {
                return res.status(500).json({
                    message: "Failed to delete task"
                });
            }

            if (this.changes === 0) {
                return res.status(404).json({
                    message: "Task not found"
                });
            }

            res.json({
                message: "Task deleted successfully"
            });
        }
    );
};
