var http = require('http'),
    //util = require('util'),
    url = require('url');

http.createServer(function(req, res){
	var now = new Date();
	console.log("Activity: "+ now.toString());
	console.log(url.parse(req.url, true).query);
	console.log("\n");

	res.writeHead(200, {'content-type': 'text/javascript'});
	res.end("{}");
}).listen(8124);

console.log("Server running on 8124");
