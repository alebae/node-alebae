var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
	res.sendfile('index.html');
});

io.on('connection', function(socket){
	socket.on('mensagem de chat', function(msg){
		io.emit('mensagem de chat', msg);
	});

	socket.on('disconnect', function(){
	   console.log('O usuário saiu da aplicação!');
	});
});

http.listen(3000, function(){
	console.log('Listening on *:3000');
});

