module.exports={};
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const db = require("./db");

const SECRET_KEY = "your_secret_key";

// Register User
exports.register = async (req, res) => {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        return res.status(400).json({
            message: "All fields are required"
        });
    }

    try {
        const hashedPassword = await bcrypt.hash(password, 10);

        db.run(
            "INSERT INTO users (name, email, password) VALUES (?, ?, ?)",
            [name, email, hashedPassword],
            function (err) {
                if (err) {
                    return res.status(400).json({
                        message: "Email already exists"
                    });
                }

                res.status(201).json({
                    message: "User registered successfully"
                });
            }
        );

    } catch (error) {
        res.status(500).json({
            message: "Server Error"
        });
    }
};

// Login User
exports.login = (req, res) => {

    const { email, password } = req.body;

    db.get(
        "SELECT * FROM users WHERE email = ?",
        [email],
        async (err, user) => {

            if (err || !user) {
                return res.status(401).json({
                    message: "Invalid Email or Password"
                });
            }

            const match = await bcrypt.compare(
                password,
                user.password
            );

            if (!match) {
                return res.status(401).json({
                    message: "Invalid Email or Password"
                });
            }

            const token = jwt.sign(
                {
                    id: user.id,
                    email: user.email
                },
                SECRET_KEY,
                {
                    expiresIn: "1d"
                }
            );

            res.json({
                message: "Login Successful",
                token
            });

        }
    );

};
