const express = require('express');
const app = express();
const path = require("path")

app.listen(3000,() => {
    console.log("servidor corriendo OK")
});
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "views/index.html"));
});

app.get("/register", (req, res) => {
    res.sendFile(path.join(__dirname, "views/register.html"));
});


