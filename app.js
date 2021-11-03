const express = require("express");
const app = express();
const path = require("path");

const publicFolderPath = path.join(__dirname, "./public");

app.use(express.static(publicFolderPath));
app.listen(3000, () => {
  console.log("Servidor OK");
});
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./views/index.html"));
});
