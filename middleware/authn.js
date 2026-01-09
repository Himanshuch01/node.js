const express = require("express");
const app = express();
const port =5001;

function auth(req, res, next) {
    if (req.headers.token === "12345") {
        next();
    } else {
        res.status(401).send("Access Denied");
    }
}

app.get("/secure", auth, (req, res) => {
    res.send("Welcome! You are authenticated.");
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
