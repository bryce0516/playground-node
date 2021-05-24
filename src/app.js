const express = require("express");
const path = require("path");

console.log(__dirname);
console.log(path.join(__dirname, "../public"));

const app = express();
const publicDirectoryPath = path.join(__dirname, "../public");

app.use(express.static(publicDirectoryPath));

app.get("", (req, res) => {
  res.send("<h1>Hello express!</h1>");
});

app.get("/help", (req, res) => {
  res.send({
    name: "Andrew",
    age: 27,
  });
});

// app.get("/about", (req, res) => {
//   res.send([{ name: "Sara" }, { name: "mike" }]);
// });

app.get("/weather", (req, res) => {
  res.send("Your weather");
});

app.listen(3000, () => {
  console.log("Server is up on port 3000.");
});
