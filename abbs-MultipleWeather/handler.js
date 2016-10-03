'use strict';
var aws = require('aws-sdk');
var lambda = new aws.Lambda({
  region:"us-east-1"
});
var async = require('async');
var WeatherHelper = require('../lib/WeatherHelper.js');



module.exports.handler = function(event, context, cb) {

    var listaFunciones = event.cities.map(function(city){
    return async.apply(funcionInvoke, city);
  });
    async.parallel(listaFunciones,function(error,data){
      cb(null,data);
    });
};

function funcionInvoke(c,callback){
  var params = {
    FunctionName: "abbs-sls-singleWeather",
    Payload: JSON.stringify({city:c}),
    InvocationType: "RequestResponse"
  };
  lambda.invoke(params, function(error, data){
    if(error){

      callback(error,null);
    };

    callback(null,data.Payload);
  });
};

