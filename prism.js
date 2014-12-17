var connect = require('connect'),
    http = require('http'),
    url = require('url');

var app = connect();
app.use(function(req, res){
	var now = new Date();
	console.log('Activity: '+ now.toString());
	console.log(url.parse(req.url, true).query);
	console.log('\n');

	res.end('{}');
});

http.createServer(app).listen(8124);

console.log('Server running on 8124');
