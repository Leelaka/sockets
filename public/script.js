var socket = null;

const sendMessage=()=>{
    let message=$('#text').val();
    let payload={
        "msg":message,
        "sender":'demo'

    };
    socket.emit('chat-message',payload);
};

const roll=()=>{
    let payload={
        "sender":'demo'
    };
    socket.emit('roll',payload);
};

$(document).ready(function(){
    console.log("Document is ready");
    socket = io();

    socket.on('chat-message', msg=>{
        $('#chatArea').append($('<li>').text(msg));
    });

    socket.on('roll', msg=>{
        $('#chatArea').append($('<li>').text(msg));
    });

    socket.on('time', msg=>{
        $('#time').html(msg);
    });
    // //bind the button
    // $("#sendMessageBtn").click(testButtonFunction);

    // //test get call
    // $.get('/test?user_names="Fantastic User"',(result)=>{
    //     console.log(result);
    // });

    $('#sendMessageBtn').click(sendMessage);
    $('#rollBtn').click(roll);
});

