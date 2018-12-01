const request = require('request');

var getWeather = (lat, lng, callback) => {
   request({
     url : `https://api.darksky.net/forecast/a27f5544ab81bc9b7ea2f043bbff484b/${lat},${lng} ` ,
     json : true
   } , (error, response, body)=>{
     if(error){
       callback('Unable to connect to forecast.io server');
     } else if(response.statusCode === 400){
       callback('Unable to fetch weather');
     } else if(response.statusCode === 200){
       callback(undefined, {
       temperature : body.currently.temperature,
       apparentTemperature : body.currently.apparentTemperature
     });
     }
   });

};

module.exports.getWeather = getWeather;
