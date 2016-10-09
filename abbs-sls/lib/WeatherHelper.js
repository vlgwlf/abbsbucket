/**
 * Created by abbs on 29/09/16.
 */
var aws = require('aws-sdk');
var lambda = new aws.Lambda({region:"us-east-1"});
var request = require('request');
require('string_format');


module.exports.abbsWeather = function(city, callback){
    request.get("http://api.openweathermap.org/data/2.5/weather?q={0}&appid=ea4dd97a55fefeb38dcd3364cbacfd74".format(city), function(error,data){
       if(error){
           callback(error);
       }
       else{
           var response = JSON.parse(data.body);
           var result = "El clima de {0} es de {1} grados kelvin".format(city,response.main.temp);
           callback(null,result);
       }
    });
};