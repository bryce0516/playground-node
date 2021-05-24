const request = require("request");
const url = require("./url");
const weather = require("./weather");
// const url =
//   "http://api.weatherstack.com/current?access_key=779fad5c08bde83f6e88fc3b75106148&query=37.8267,-122.4233&units=f";

// request({ url, json: true }, (error, response) => {
//   const res = response.body.current;
//   console.log(
//     res.weather_descriptions[0] +
//       " it is currently " +
//       res.temperature +
//       " degree out. there is a " +
//       res.precip +
//       " change per rain"
//   );
// });

weather(url);
