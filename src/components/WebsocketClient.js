import  { useEffect } from 'react';
const message={
      id:18,
    AdminName:"Raja",
    type:"admin",
    action:"chat",
    content: "hi chellam",

};

function WebsocketClient() {
    useEffect(() => {
        let socket = new WebSocket('ws://localhost:8080/');

        socket.onopen = function (e) {
            console.log('connection opened');
            socket.send(JSON.stringify(message))
              
        }
        socket.onmessage = function (clientMessage) {
            console.log("message from server",clientMessage.data);
            socket.send(JSON.stringify(message))
        }
        socket.onerror = function (error) {
            console.error('WebSocket error:', error);
        };

    }, []);

    return
 

}

export default WebsocketClient;
