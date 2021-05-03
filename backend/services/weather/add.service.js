const { date } = require("joi");
const db = require("../../models");
const Weather = db.weathers;
const weather = require('openweather-apis');
require("dotenv").config();

// Create and Save a new Tutorial
exports.createWeather = async (name) => {
  let cityWeather;
  try{
  //set api weather
  weather.setLang('fr');
	// set city by name
	weather.setCity(name);

	// 'metric'  'internal'  'imperial'
 	weather.setUnits('metric');

	// check http://openweathermap.org/appid#get for get the APPID
 	weather.setAPPID( process.env.API_KEY);


   // get a simple JSON Object with temperature, humidity, pressure and description
   cityWeather = await new Promise(function(resolve, reject) {
    weather.getSmartJSON(function(err, JSONObj) {
      if (err) {
        reject(err);
      } else {
        resolve(JSONObj);
      }
    });
  });

}catch(err){
  return {
    res: "error",
    error: {
      message: err.message || "Some error occurred while creating the weather.",
      code: 413,
    },
  };
}

   // create weather
   if(cityWeather){
  const weatherResult = {
    name: name,
    description: cityWeather.description,
    temperature: cityWeather.temp,
    humidity: cityWeather.humidity,
    pressure: cityWeather.pressure,
    rain: cityWeather.rain
  };

  // Add Weather in the database
  try{
  const created = await  Weather.create(weatherResult);
   if(created){
        return {
            res: "success",
            data: created,
          };
        }
}catch(err){

    return {
        res: "error",
        error: {
          message: err.message || "Some error occurred while creating the weather.",
          code: 416,
        },
      };
}
}else{
  return {
    res: "error",
    error: {
      message: "Some error occurred while getting weather details.",
      code: 414,
    },
  };
}
};