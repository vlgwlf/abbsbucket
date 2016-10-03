var WeatherHelper = require('../lib/WeatherHelper.js');

module.exports.handler = function(event, context, cb) {
  WeatherHelper.abbsWeather(event.city,function(error,data){
    cb(null,data);
  });
};
