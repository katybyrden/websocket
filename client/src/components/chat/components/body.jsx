import React from 'react';
import {useNavigate} from "react-router-dom";

const Body = ({messages}) => {
    const navigate = useNavigate()
//фукнционал кнопки покинуть чать
    const handleLeave =() => {
        localStorage.removeItem('user')
        navigate('/')
    }
    return (
        <>
            <header className='header'>
                <button className='btn' onClick={handleLeave}>Покинуть чат</button>
            </header>

            <div className='container'>
                {
                    messages.map(element =>
                        element.name === localStorage.getItem('user') ? (
                            <div className='chats' key={element.id}>
                                <p className='senderName'>Вы</p>
                                <div className='messageSender'>
                                    <p>{element.text}</p>
                                </div>
                            </div>
                        ) : (
                            <div className='chats' key={element.id}>
                                <p>{element.name}</p>
                                <div className='messageRecipient'>
                                    <p>{element.text}</p>
                                </div>
                            </div>
                        ))
                }


            </div>
        </>
    );
};

export default Body;