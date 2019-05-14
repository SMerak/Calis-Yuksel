var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var fs = require("fs");

server.listen(3000, function(){
	console.log("Server is now running...");
});

io.on('connection', function(socket){
	console.log("Player Connected!");
	
	socket.on("get",function(){
		console.log("get");

		fs.readFile("ilker", function(error, data){
			console.log(data.toString());
			socket.emit("setIlker",{yukseklik : data.toString()});
		});
		
		fs.readFile("burak", function(error, data){
			console.log(data.toString());
			socket.emit("setBurak",{yukseklik : data.toString()});
		});
		
		fs.readFile("serhat", function(error, data){
			console.log(data.toString());
			socket.emit("setSerhat",{yukseklik : data.toString()});
		});
		
		fs.readFile("taha", function(error, data){
			console.log(data.toString());
			socket.emit("setTaha",{yukseklik : data.toString()});
		});
		
		fs.readFile("murat", function(error, data){
			console.log(data.toString());
			socket.emit("setMurat",{yukseklik : data.toString()});
		});
		
		
	});
	
	
	socket.on("setSerhat",function(data){
		fs.writeFile("serhat",data.toString(),function (err) {
			if(err) throw err;
			console.log("Serhat'ın kulesi = " + data.toString());
		});
	});

	socket.on("setTaha",function(data){
		fs.writeFile("taha",data.toString(),function (err) {
			if(err) throw err;
			console.log("Taha'ın kulesi = " + data.toString());
		});
	});
	
	socket.on("setMurat",function(data){
		fs.writeFile("murat",data.toString(),function (err) {
			if(err) throw err;
			console.log("Murat'ın kulesi = " + data.toString());
		});
	});
	
	socket.on("setBurak",function(data){
		fs.writeFile("burak",data.toString(),function (err) {
			if(err) throw err;
			console.log("Burak'ın kulesi = " + data.toString());
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
	