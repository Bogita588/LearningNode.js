//  Reading from a stream

var fs = require("fs");

var data ='';
// create a readable stream
var readerStream = fs.createReadStream("input.txt");
// Set the encoding to be utf8.

readerStream.setEncoding('utf-8');

//Handle stream events
// Handle stream events --> data, end, and error
readerStream.on('data', function(chunk) {
    data += chunk;
   })
readerStream.on('end',function(){
    console.log(data);
   });

   readerStream.on('error', function(err){
    console.log(err.stack);
   });
   console.log("Program Ended");
   