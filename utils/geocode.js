const { clear } = require('console');
const request = require('request')

const geoCode = (address , callback) => { 
    const url = "http://api.mapbox.com/geocoding/v5/mapbox.places/"+address+".json?proximity=-74.70850,40.78375&access_token=pk.eyJ1IjoidG52cmFobWVkOTgiLCJhIjoiY2w1ZHR6MG1hMGp5YjNsbXB4b2R4NGR2eSJ9.mmGyPjUfcL-YA1_Usu1_vA&limit=1";
    
    request({url:url,json:true},(error,response)=>{
        // console.log(response);
        if(error) { callback('unable to connect to server'); return; }
        if(response===undefined) {callback('unable to connect to server: bad response'); return; }
        if(response.body.features.length === 0){
           callback('location not found'); return;
        }

        callback(undefined,{
            // body: response.body.features[0],
            latitude: response.body.features[0].center[0],
            longitude: response.body.features[0].center[1]
        })        
    })

};

module.exports = geoCode;