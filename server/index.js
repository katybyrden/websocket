const express  = require('express')
const app = express()
const PORT = 5000

const http = require ('http').Server(app)
const cors = require ('cors')
const socketIO = require ('socket.io')(http, {
    cors: {
        origin: 'http://localhost:5173'
    }
})

app.get('api', (req, res)=>{ //запросы
    res.json({
        message: 'Hello'
    })
})

const users=[]

socketIO.on('connection', (socket) =>{
    console.log(`${socket.id} user connected`)// уведомление о том что юзер присоединислся по сокету и его id
    socket.on('message', (data)=>{
        socketIO.emit('response', data)
    })

    socket.on('newUSer', (data)=>{
        users.push(data)// добавляем пользователя в конец массива
        socketIO.emit('responseNewUser', users)//новое событие
    })
    socket.on('disconnect', ()=>{
        console.log(`${socket.id} disconnect`)// юзер отсоединился и его id
    })
})

http.listen(PORT, ()=> {
    console.log('Server working')
})