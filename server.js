const express = require("express");
const path = require("path");
const siteData = require("./data/site");

const app = express();
const port = process.env.PORT || 3000;
const root = __dirname;

app.set("views", root);
app.set("view engine", "pug");

app.use("/css", express.static(path.join(root, "css")));
app.use("/img", express.static(path.join(root, "img")));
app.use("/js", express.static(path.join(root, "js")));

app.get("/api/site", (req, res) => {
  res.json(siteData);
});

app.get("/", (req, res) => {
  res.render("index", siteData);
});

app.listen(port, () => {
  console.log(`CopyServices running at http://localhost:${port}`);
});
