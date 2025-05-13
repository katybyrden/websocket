import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";

const Home = ({socket}) => {
    //после того как получим имя, пользователя перенаправит на страницу чата
    const navigate = useNavigate()
    //сохраняем имя пользователя(ввод текста, кнопка войти в чат)
    const [user, setUser] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault() //отмена обновления страницы
        localStorage.setItem('user', user)
        socket.emit('newUser', {user, socketID: socket.id})//сервер узнает о новом пользователе
        navigate('/chat')//перенаправление пользователя в чат

    }

    return (
        <form onSubmit={handleSubmit}>
            <h2>Вход в чат</h2>
            <label htmlFor="user"></label>
            <input
                type="text"
                id='user'
                value={user}
                onChange={(e)=> setUser(e.target.value)}
                className={'userInput'}/>
            <button type='submit'>Войти</button>
        </form>
    );
};

export default Home;