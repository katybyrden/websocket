import React, {useState} from 'react';

const MessageBlock = ({socket}) => {
    const [message, setMessage] = useState('')

    const handleSend = (e) => {
        e.preventDefault()
        if (message.trim() && localStorage.getItem('user')) { //отправка сообщения
            socket.emit('message', {
                text: message,
                name: localStorage.getItem('user'),
                id: `${socket.id}-${Math.random()}`, //сгенерировать рандомный ключ
                socketID: socket.id
            })
        }
        setMessage('')
    }
    return (
        <div className='messageBlock'>
            <form className='form' onSubmit={handleSend}>
                <input
                    type = "text"
                    className='userMessage'
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
                <button>Написать</button>
            </form>
        </div>
    );
};

export default MessageBlock;