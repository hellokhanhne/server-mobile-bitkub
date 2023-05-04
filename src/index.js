require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");
const { engine } = require("express-handlebars");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use(express.static(path.resolve(__dirname, "./public")));

app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", path.resolve(__dirname, "./views"));

app.get("/oauth/bitkub-next", async (req, res) => {
  res.render("home");
});

const port = process.env.PORT || 8000;
app.listen(port, console.log(`Listening on port ${port}...`));
