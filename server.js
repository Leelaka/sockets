var express = require('express');
var app = express();

var http = require('http').createServer(app);
var io = require('socket.io')(http);

var port = process.env.PORT || 8080;

app.use(express.static(__dirname + '/public'));

http.listen(port);
console.log("Server listening on: "+ port);

//code for the socket 
//create a web socket server
io.on('connection',(socket) => {
    console.log('A user has connected');

    socket.on("disconnect", () => {
        console.log("User disconnected");
    });

    // socket.on("chat-message", data=>{
    //     console.log(data.msg);

    // });

    socket.on("chat-message", data=>{
        console.log(data.msg);
        io.emit('chat-message', data.msg);
    });
    //socket.on("roll");
});


