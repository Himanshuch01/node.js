const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();

app.use(cookieParser());   // enable cookie parsing

app.get("/", (req, res) => {
    res.cookie("username", "Monika");
    res.send("Cookie set!");
});

app.get("/read", (req, res) => {
    res.send("Cookie: " + req.cookies.username);
});

app.listen(6000);
