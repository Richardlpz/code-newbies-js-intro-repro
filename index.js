

var messagesElem = document.getElementById('messages');

var chatFormElem = document.getElementById('chat-form');

var messageInputElem =document.getElementById('message-input')

function writeMessage(message){
    
    var messageElem = document.createElement('li');

    messageElem.innerText = message;

    messagesElem.appendChild(messageElem);

}
// Test to see if function writemessage works:  writeMessage('Does This work')

chatFormElem.addEventListener('submit', function(event) {
    event.preventDefault();

    writeMessage(messageInputElem.value);

    messageInputElem.value = '';
});



//preventDeafult made it so when we click 'send' in chat room nothing happens. There is no post 