const express = require("express");
const app = express();
const port = 3000;

// Logging middleware
function logger(req, res, next) {
    console.log(`${req.method} ${req.url}`);
    next();
}

app.use(logger);

app.get("/", (req, res) => {
    res.send("Home Page");
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
