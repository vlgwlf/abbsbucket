var AWS = require('aws-sdk');

AWS.config.region = 'us-east-1';

var s3 = new AWS.S3();

s3.listBuckets(function(err, data) {
  if (err){ 
		console.log("Error:", err); 
	}
  else {
    for (var i in data.Buckets) 
    {
      var bucket = data.Buckets[i];
      if(bucket.Name == 'abbsbucket')
      {
          console.log("Bucket: ", bucket.Name, '; Ver: ', bucket.CreationDate);
	  break;
      }
    }
  }
});

