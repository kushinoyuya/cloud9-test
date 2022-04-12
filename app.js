const Port = process.env.Port;
const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.use("/", require("./routes/index.js"));

app.listen(Port, () => {
    console.log("Apllication listening at ${Port}")
})