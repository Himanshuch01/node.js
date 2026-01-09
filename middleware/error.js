const express = require("express");
const app = express();
const port = 9000;

// ---------------- ROUTES ----------------

// Route that throws an error
app.get("/login", (req, res, next) => {
    const error = new Error("Login failed"); // create error
    next(error); // pass error to error-handling middleware
});

// Another route without error
app.get("/", (req, res) => {
    res.send("Home Page");
});


// ----------- ERROR-HANDLING MIDDLEWARE ------------
// Must have 4 parameters (err, req, res, next)
app.use((err, req, res, next) => {
    console.error(err.message);

    res.status(500).send("Something went wrong – Login Error");
});


// ---------------- SERVER ----------------
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
