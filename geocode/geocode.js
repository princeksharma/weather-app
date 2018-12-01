const request = require('request');

var geocodeAddress = (address, callback) =>{
  var encodedAddress = encodeURIComponent(address);

  request({
    url: `https://maps.googleapis.com/maps/api/geocode/json?address= ${encodedAddress}`,
    json: true
  }, (error,response, body) =>{
    if(error){
      console.log('Unable to connect to google server');
    } else if(body.status === 'ZERO_RESULTS'){
      console.log('Unable to findn the address');
    } else if(body.status === 'OK'){
    console.log(`Address: ${body.results[0].formatted_address}`);
    console.log(`Lattitude: ${body.results[0].geometry.location.lat}`);
    console.log(`Longitude: ${body.results[0].geometry.location.lng}`);
     }
  });

}

module.exports.geocodeAddress = geocodeAddress;
