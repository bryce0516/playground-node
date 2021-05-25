const express = require("express");
const path = require("path");
const hbs = require("hbs");
const url = require("../url");
const weather = require("../weather");
const request = require("request");

const app = express();

const publicDirectoryPath = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../public/templates/views");
const partialPath = path.join(__dirname, "../public/templates/partials");
// setup handlebars engin and view location
app.set("view engine", "hbs");
app.set("views", viewsPath);
hbs.registerPartials(partialPath);

//setup staticpath
app.use(express.static(publicDirectoryPath));

app.get("", (req, res) => {
  res.send("<h1>Hello express!</h1>");
});

app.get("/help", (req, res) => {
  res.render("help", {
    title: "help",
    name: "hyesung",
  });
});

app.get("/about", (req, res) => {
  res.send([{ name: "Sara" }, { name: "mike" }]);
});

app.get("/weather", (req, res) => {
  if (!req.query.address) {
    return res.send({
      error: "You must provide an address",
    });
  }

  request({ url: url, json: true }, (error, response) => {
    const resVal = response.body.current;
    if (error) {
      console.log("this application has error", error);
    } else {
      res.send({
        forecast: "Your weather",
        location: "seoul",
        address: req.query.address,
        weatherValue: `${resVal.weather_descriptions[0]} it is currently ${resVal.temperature} degree out. there is a ${resVal.precip} change per rain`,
      });
    }
  });
});

app.get("/products", (req, res) => {
  if (!req.query.search) {
    res.send({
      error: "you must provide a search term",
    });
  }
  res.send({
    products: [req.query.search],
  });
});

app.get("/help/*", (req, res) => {
  res.render("404", {
    title: "404",
    name: "hyesung",
    errorMessage: "Help article not found",
  });
});
app.get("*", (req, res) => {
  res.render("404", {
    title: "404",
    name: "hyesung",
    errorMessage: "Page not found",
  });
});

app.listen(3000, () => {
  console.log("Server is up on port 3000.");
});
