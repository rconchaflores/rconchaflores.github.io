let high = parseFloat(document.getElementById('high').innerHTML);
let windspeed = parseFloat(document.getElementById('windspeed').innerHTML);

let roundedWindspeed = Math.pow(windspeed, 0.16);
let windchill = 35.74 + 0.6215 * high - 35.75 * roundedWindspeed + 0.4275 * high * roundedWindspeed;

if (high <= 50 && windspeed > 3) {

  document.getElementById('windchill').innerHTML = Math.round(windchill);
} else {

  windchill = "N/A";
}