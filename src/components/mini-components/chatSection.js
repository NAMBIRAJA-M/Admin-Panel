import React, { useState } from 'react';

function ChatSection() {

    const [clientMsg, setClientMsg] = useState([])

    function sendMessage() {

        const message = document.getElementById("messageInput").value;
        if (message.trim() === "")
            return;
        console.log("running succesfully", message);
        setClientMsg((prevMessage) =>
            [...prevMessage, message]
        );
        document.getElementById("messageInput").value="";
    }
    return (
        <>
            <div className="chatbox-container">
                <div className="chat-section">
                    {console.log("running succesfully from func", clientMsg)}
                    {clientMsg.map((msg, index) => {
                        
                        console.log("running succesfully from map func",index, msg);
                        return(
                        <p key={index} className="client" > {msg}</p>
                        )

                    })}

                    


                </div>

                <div className="chatbox-inputfield">
                    <input id="messageInput" placeholder="Type a message" /* onChange={sendMessage} */ />
                    <div className="icon-holder">
                        <img src="/assets/send.png" className="sendbtn" alt='sendimage' onClick={sendMessage} />
                    </div>

                </div>
            </div >
        </>
    );
}

export default ChatSection;
