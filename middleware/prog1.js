const express = require("express");
const app = express();
const port = 5000;

// ----------- MIDDLEWARE -------------
function checkLogin(req, res, next) {
    const isLoggedIn = req.query.loggedin;

    if (isLoggedIn === "true") {
        next(); // allow request to continue
    } else {
        res.status(403).send("Access Denied: You are not logged in");
    }
}

// Use middleware for all routes that need login check
app.use(checkLogin);

// ----------- ROUTES -----------------
app.get("/", (req, res) => {
    res.send("Welcome! You are logged in.");
});

app.get("/dashboard", (req, res) => {
    res.send("User Dashboard");
});

// ----------- SERVER -----------------
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
