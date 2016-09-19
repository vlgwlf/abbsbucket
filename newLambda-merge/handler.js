'use strict';
var s3Helper = require('./lib/S3Helper');

module.exports.handler = function(event,context, cb) {
    var result = [],
        il = 0,
        ir = 0,
        left = event.arrayLeft,
        right = event.arrayRight;
        console.log(left);
        console.log(right);
    while (il < left.length && ir < right.length) {
        if (left[il] < right[ir]) {
            result.push(left[il++]);
        }
        else {
            result.push(right[ir++]);
        }
    }
    context.succeed(result.concat(left.slice(il)).concat(right.slice(ir)));
};