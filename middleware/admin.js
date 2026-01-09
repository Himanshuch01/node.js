const express = require("express");
const app = express();
const port = 7000;

// -------- ADMIN MIDDLEWARE ----------
function checkAdmin(req, res, next) {
    const role = req.query.role;

    if (role === "admin") {
        next(); // allow access
    } else {
        res.status(403).send("Not Authorized: Admin access required");
    }
}

// -------- ROUTES --------

// Admin route protected by middleware
app.get("/admin", checkAdmin, (req, res) => {
    res.send("Welcome Admin! You have access.");
});

// Public route (no middleware used)
app.get("/", (req, res) => {
    res.send("Public Route: No admin check here.");
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
