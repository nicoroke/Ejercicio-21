require("dotenv").config();
const express = require("express");
const routes = require("./routes");

const app = express();
const PORT = process.env.APP_PORT;

app.set("view engine", "ejs");

app.use(routes);

app.listen(PORT, console.log(`Server: http://localhost:${PORT}`));
