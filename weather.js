const request = require("request");

function weather(url) {
  request({ url: url, json: true }, (error, response) => {
    const res = response.body.current;
    if (error) {
      console.log("this application has error", error);
    } else {
      console.log(
        res.weather_descriptions[0] +
          " it is currently " +
          res.temperature +
          " degree out. there is a " +
          res.precip +
          " change per rain"
      );
    }
  });
}

module.exports = weather;
