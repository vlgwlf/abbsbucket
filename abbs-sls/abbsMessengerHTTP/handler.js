'use strict';
var request = require('request');
var token = require('../token.json');

module.exports.handler = function(event, context, cb) {
    var params = event.message;
    request.post(token.token+params, function(err,data){
      if(err){
        callback(err);
      }
      else{
        callback(null,data);
      }
    });
  };
