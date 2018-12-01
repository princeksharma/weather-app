const yargs = require('yargs');

const geocode = require('./geocode/geocode.js');

const weather = require('./weather/weather.js');

const argv = yargs.option({
  a : {
    demand : true,
    alias : 'address',
    describe : 'an address to fetch weather for',
    string : true
  }
})
.help()
.alias('help','h')
.argv;

geocode.geocodeAddress(argv.address, (errorMessage, results) =>{
  if(errorMessage){
    console.log(errorMessage);
  } else {
    console.log(results.address);
    weather.getWeather(results.latitude, results.longitude, (errorMessage, weatherResults) =>{
      if (errorMessage){
        console.log(errorMessage);
      } else {
        console.log(`It is currently ${weatherResults.temperature}. It feels like ${weatherResults.apparentTemperature}. `);
      }
    });
  }
});
