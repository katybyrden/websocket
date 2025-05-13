import socketIO from 'socket.io-client'
import ChatPage from "./components/chat/index.jsx";
import {Route, Routes} from "react-router-dom";
import Home from "./components/home/home.jsx";
const socket = socketIO.connect('http://localhost:5000')

function App() {

  return (
      <Routes>
          <Route path='/' element={<Home socket={socket}/>}/>
          <Route path='/chat' element={<ChatPage socket={socket}/>}/>
      </Routes>
  )
}
//socket принимаем на странице чата и на странице home, получать сообщения
export default App
