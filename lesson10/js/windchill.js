let high = parseFloat(document.getElementById('tempmax').innerHTML);
let windspeed = parseFloat(document.getElementById('speed').innerHTML);

let roundedWindspeed = Math.pow(windspeed, 0.16);
let windchill = 35.74 + 0.6215 * high - 35.75 * roundedWindspeed + 0.4275 * high * roundedWindspeed;

if (high <= 50 && windspeed > 3) {

  document.getElementById('windchill').innerHTML = Math.round(windchill);
} else {

  windchill = "N/A";
}