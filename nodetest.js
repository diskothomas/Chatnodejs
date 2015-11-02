var http = require('http');
	url = require('url');
	querystring = require('querystring');

var server = http.createServer(function(request, response) {
	var page = url.parse(request.url).pathname;
		params = querystring.parse(url.parse(request.url).query);
	
	console.log(page);

		if (page == '/') {
			response.writeHead(200, {"Content-Type": "text/html"});
			if ('prenom' in params && 'nom' in params) {
					response.write('<!DOCTYPE html>'+
			'<html>'+
			'	<head>'+
			'		<meta charset="utf-8" />'+
			'		<title>Acceuil</title>'+
			'	</head>'+
			'	<body>'+
			'		<p>Bienvenue '+params['prenom']+' '+params['nom']+'</p>'+
			'	</body>'+
			'</html>');	
			}
			else {
					response.write('<!DOCTYPE html>'+
			'<html>'+
			'	<head>'+
			'		<meta charset="utf-8" />'+
			'		<title>Acceuil</title>'+
			'	</head>'+
			'	<body>'+
			'		<p>Vous avez oublié d\'entrer votre prenom et votre nom</p>'+
			'	</body>'+
			'</html>');
			};
		} 
		else {
			response.writeHead(404, {"Content-Type": "text/html"});
			response.write('<!DOCTYPE html>'+
		'<html>'+
		'	<head>'+
		'		<meta charset="utf-8" />'+
		'		<title>Page infos</title>'+
		'	</head>'+
		'	<body>'+
		'		<p>Erreur 404, page non trouvée.</p>'+
		'	</body>'+
		'</html>'); 
		};
		response.end();
	});
server.on('close', function() {
	console.log('Arret du serveur');
});

server.listen(8080);

//server.close();

