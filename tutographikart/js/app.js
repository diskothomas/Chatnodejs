var http = require('http');

var server = http.createServer(function(request, response) {
		response.end();
	});

server.listen(8080);

//server.close();

