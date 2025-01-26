import React, { useEffect } from 'react';

function WebsocketClient() {
    useEffect(() => {
        let socket = new WebSocket('ws://localhost:8080/');

        socket.onopen = function (e) {
            console.log('connection opened');
            socket.send("hello server...");
        }
        socket.onmessage = function (e) {
            console.log(e.data);
          /*   document.getElementById('message').textContent = e.data;*/
        }
        socket.onerror = function (error) {
            console.error('WebSocket error:', error);
        }; 

    }, []);

    return <div>WebSocket Client</div>;
}

export default WebsocketClient;
