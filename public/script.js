var socket = null;

const sendMessage=()=>{
    let message=$('#text').val();
    let payload={
        "msg":message,
        "sender":'demo'

    };
    socket.emit('chat-message',payload);
};

$(document).ready(function(){
    console.log("Document is ready");
    socket = io();

    socket.on('chat-message', msg=>{
        $('#chatArea').append($('<li>').text(msg));
    });
    // //bind the button
    // $("#sendMessageBtn").click(testButtonFunction);

    // //test get call
    // $.get('/test?user_names="Fantastic User"',(result)=>{
    //     console.log(result);
    // });

    $('#sendMessageBtn').click(sendMessage);
});

