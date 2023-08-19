var http = require("http");
http.createServer(function(req, res) {

// Send the HTTP header 
 // HTTP Status: 200 : OK
 // Content Type: text/plain

    res.writeHead(200, {'content-Type' :'text/plain'});

    res.end('Hello world\n');

}).listen(8000);
console.log('Server running at http://127.0.0.1:8081/');








