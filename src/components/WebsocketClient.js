import { useEffect } from 'react';
import ChatSection from './mini-components/ChatSection';

const message = {
    id: 18,
    AdminName: "Raja",
    type: "client",
    action: "chat",
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
            console.log("message from server", clientMessage.data);
            socket.send(JSON.stringify(message))
        }
        socket.onerror = function (error) {
            console.error('WebSocket error:', error);
        };

    }, []);

    return (

        <div>
            <ChatSection clientMessage={message}/>
        </div>

    )

}

export default WebsocketClient;
