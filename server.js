var express = require('express');
var app = express();

var http = require('http').createServer(app);
var io = require('socket.io')(http);

var port = process.env.PORT || 8080;

app.use(express.static(__dirname + '/public'));

http.listen(port);
console.log("Server listening on: "+ port);

//create timer 

let time = 0;

setInterval(()=>{
    //console.log(time);
    if(time==0){
        time=20;
    }
    else{
        time--;
    }
},1000);

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

    socket.on('roll', ()=>{
        //generate a random number
        function getRandomInt(max) {
            return Math.floor(Math.random()*Math.floor(max));
        }
        let random = getRandomInt(6);
        //console.log(random);
        socket.emit('roll', random);
    });
    //socket.on("roll");
    setInterval(()=>{
        //console.log(time);
        socket.emit('time',time);
    
    },1000);
});


