'use strict';
var request = require('request');
var token = require('../token.json');

module.exports.handler = function (event, context, callback){
    var params = JSON.parse(event.Records[0].Sns.Message);
    request.post(token.token+params.pusher.name+": "+params.commits[0].message,function(err,data){
      if(err){
        callback(err);
      }
      else{
        callback(null,data);
      }
    });
};
