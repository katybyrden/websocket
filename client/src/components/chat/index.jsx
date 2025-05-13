import React, {useEffect, useState} from 'react';
import Sidebar from "./components/sidebar.jsx";
import Body from "./components/body.jsx";
import MessageBlock from "./components/message-block.jsx";
import {ssrExportAllKey} from "vite/module-runner";

const ChatPage = ({socket}) => {
    //получаем сообщения
    const [messages, setMessages] = useState([])

    useEffect(() => {
        socket.on('response', (data)=> setMessages([...messages, data]))
    }, [socket, messages])

    return (
        <div className='chat'>
            <Sidebar socket={socket}/>
            <main className='main'>
                <Body messages={messages}/>
                <MessageBlock socket ={socket}/>
            </main>
        </div>
    );
};

export default ChatPage;