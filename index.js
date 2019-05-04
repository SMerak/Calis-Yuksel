var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var fs = require("fs");

server.listen(3000, function(){
	console.log("Server is now running...");
});

io.on('connection', function(socket){
	console.log("Player Connected!");
	
	socket.on("getIlker",function(){
		console.log("getIlker");
		
	
		fs.readFile("ilker", function(error, data){
			console.log(data.toString());
			socket.emit("set",{yukseklik : data.toString()});
		});
		
		
	});
	
	socket.on("getSerhat",function(){
		console.log("getSerhat");
		fs.readFile("serhat", function(error, data){
			console.log(data.toString());
			socket.emit("set",{yukseklik : data.toString()});
		});
	});
	
	socket.on("setSerhat",function(data){
		fs.writeFile("serhat",data.toString(),function (err) {
			if(err) throw err;
			console.log("Serhat'ın kulesi = " + data.toString());
		});
	});

	socket.on("setIlker",function(data){
		fs.writeFile("ilker",data.toString(),function (err) {
			if(err) throw err;
			console.log("İlkerin kulesi = " + data.toString());
		});	
	});
	
	socket.on('disconnect', function(){
		console.log("Player Disconnected");
	});
});


	