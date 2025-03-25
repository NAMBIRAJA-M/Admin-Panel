import React, { useEffect, useState, useMemo } from 'react';

function ChatSection(props) {
    const [input, setInput] = useState("")
    const [updatedInput, setUpdated] = useState("")
    const [clientMsg, setClientMsg] = useState([]);
    const [adminMsg, setAdminMsg] = useState([]);
    const [messages, setMessages] = useState({
        adminMsg: [],
        clientMsg: [],
    })


    const liveMsg = useMemo(() => ({
        data: updatedInput,
        type: "admin",
    }), [updatedInput]);


    /* client */
    useEffect(() => {
        if (props.clientMessage) {
            setClientMsg((prevMessage) => [...prevMessage, props.clientMessage]);
        }
    }, [props.clientMessage]);

    /* merging */
    useEffect(() => {
        setMessages(
            [...adminMsg, ...clientMsg]
        )
    }, [adminMsg, clientMsg])

    /* admin */
    useEffect(() => {
        if (liveMsg)
            setAdminMsg((prevMessage) =>
                [...prevMessage, liveMsg]
            );
        document.getElementById("messageInput").value = "";
    }, [liveMsg])





    function handleInputChange(e) {
        setInput(e.target.value);
        console.log(e.target.value)
    }
    function sendMessage() {


        if (input)
            setUpdated(input);


    }

    return (
        <>
            <div className="chatbox-container">
                <div className="chat-section">
                    {console.log("running succesfully from func", adminMsg)},
                    {/*    {console.log("client message form admin chat section", clientMsg)} */}
                    {console.log("merged messages", messages)}


                    {/*       {[...clientMsg.map(msg => ({ sender: "server", content: msg })),
                    ...adminMsg.map(msg => ({ sender: "client", content: msg }))].map((msg, index) => (
                        <p key={index} className={msg.sender === "server" ? "client" : "server"}>
                            {msg.content}
                        </p>
                    ))}
 */}               {
                        Array.isArray(messages) && messages.map((msg, index) => {
                            console.log(msg)
                            return (
                                <p key={index} className={msg.type === "admin" ? "client" : "server"}>
                              {/*       {msg.type === "admin" ? msg.content : msg.data} */}
                              {msg.data || msg.content}
                                        {console.log("from server",msg.content)}
                                        {console.log("from admin",msg.data)}
                                                                </p>
                            )
                        })
                    }



                    {console.log("array", messages[1])}
                </div>

                <div className="chatbox-inputfield">
                    <input id="messageInput" placeholder="Type a message" value={input}
                        onChange={handleInputChange} />
                    <div className="icon-holder">
                        <img src="/assets/send.png" className="sendbtn" alt='sendimage' onClick={sendMessage} />
                    </div>

                </div>
            </div >
        </>
    );
}

export default ChatSection;
