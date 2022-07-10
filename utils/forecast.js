

/*

Goal : create a resusable function for gettig the forecast

1. setup  the "forecast" function in utils/forecast.js
2.require the function in app.js and call it as shown below
3.the forecast function should have three potential calls to callbackc : 
-low level error, pass string for error
- coordinate error , pass string for error
-success , pass forecast string for data (same format as from before
    )

*/

const { clear } = require('console');
const request = require ( 'request' );

const forecast = (latitude,longitude , callback)=>{
  const url = "http://api.weatherstack.com/current?access_key=ea3a7922a46cce11b334fc277ec4a5ca&query="+encodeURIComponent(latitude)+","+encodeURIComponent(longitude)+"" ;
// const url = "http://api.weatherstack.com/current?access_key=ea3a7922a46cce11b334fc277ec4a5ca&query=37.8267,-122.4233";
  
request({url: url,json:true},(error,{body})=>{
    if(body=== undefined) { callback("bad response. Please check URL and try again "); return}
    if(error){callback("unable to connect to server HTTP ERROR :404"); return}
    // if(body.features.length===0){callback("location not found. Please Check coordinates and try again"); return ;}
    callback(undefined,body)
  })
}

module.exports = forecast;