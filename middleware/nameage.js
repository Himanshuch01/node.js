const express = require("express");
const app = express();
const port = 8000;

// To parse JSON body
app.use(express.json());

// ---------- MIDDLEWARE ------------
function validateUser(req, res, next) {
    const { name, age } = req.body;

    if (!name || !age) {
        return res.status(400).send("Invalid request: name and age are required");
    }

    next(); // continue if valid
}

// -------- ROUTES --------------

// Apply middleware ONLY to this route
app.post("/submit", validateUser, (req, res) => {
    res.send("Valid request: Name and age received");
});

// -------- SERVER --------------
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
