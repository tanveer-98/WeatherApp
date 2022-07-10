const request = require('request');

// const url = "http://api.weatherstack.com/current?access_key=ea3a7922a46cce11b334fc277ec4a5ca&query=37.8267,-122.4233";


// // request({url: url}, (e,res)=>{
// //     result = JSON.parse(res.body);
// //     console.log(result.current)
// // });

// // same above can be printed using 
// let result;
// let flag = 0;
// if(flag ===1){
//     request({url: url,json:true},  (e,res)=>{
//         result = res.body.current;
//         console.log(result.temperature);
//     console.log(result.precip)
//     });
// }


//goal ptint a small forcast to the user 
// 1. print : it is currently 58.55 degrees out . there is 0% chance of rain 
// 2. test your work 

//geocoding : addres : lat/long -> weather forecast 


// goal :  print the lat / long for los angeles

/*
    1. fire off a new request to the URL  explored in browser
    2. move the request module parese it as JSON
    3. print both the latitute and longitude to the terminal 
    4. test 

*/

// let flag2 = 1;
// if(flag2==1) {
// const url2 = "http://api.mapbox.com/geocoding/v5/mapbox.places/dhurbi.json?proximity=-74.70850,40.78375&access_token=pk.eyJ1IjoidG52cmFobWVkOTgiLCJhIjoiY2w1ZHR6MG1hMGp5YjNsbXB4b2R4NGR2eSJ9.mmGyPjUfcL-YA1_Usu1_vA&limit=1";
// request({url: url2,json:true},(e,result) => {
 
//     let coordinate ;
//     if(e){  console.log("unable to connect to server:"); return;}

//     if(result.body.features.length===0){ console.log("No location found : Please check location");return;}
    
//     coordinate = result.body.features[0].center;
//     console.log(coordinate);
// });
// }


const geoCode = require('./utils/geocode.js');
const forecast = require('./utils/forecast.js');
// geoCode('dhubri',(error,data)=>{
//        if(error !== undefined) {
//         console.log(error);
//        }
//        else{
//           console.log(`latitude: ${data.latitute}`);
//           console.log(`longitude : ${data.longitude}`)
//        } // returns coordinates
// });


// forecast(26.0186,89.9857,(error,data)=>{
//     // console.log(error);
//     console.log(data);
// })

//####clubbing both geoCOde and forecast 


geoCode('dhubri',(error,data)=>{
    if(error) return console.log(error);
    forecast(26.0186,89.9857,(error,data)=>{
        if(error!==undefined) return console.error(error);
        console.log("current Temperature in "+ data.location.name+" is: "+ data.current.temperature);
    })
});