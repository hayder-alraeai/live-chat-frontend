import React, { useState, useEffect} from 'react'
import '../styles/Chat.css'
import queryString from 'query-string'
import io from 'socket.io-client'
import Input from '../components/Input'
import ChatBox from '../components/ChatBox'
import RoomUsers from '../components/RoomUsers'
let socket;
export default function Chat({ location }) {
    const [name, setName] = useState('')
    const [room, setRoom] = useState('')
    const [message, setMessage] = useState('')
    const [messages, setMessages] = useState([])
    const [roomData, setRoomData] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const BASE_URL = 'https://live-chat-backend-hayder.herokuapp.com'
    // const BASE_URL = 'http://localhost:5000'
    useEffect(() => {
        const {name, room} = queryString.parse(location.search)
        socket = io(BASE_URL)
        setName(name)
        setRoom(room)
        socket.emit('join', {name, room}, () => {
        })
        return () => {
            socket.emit('disconnect')
            socket.off()
        }

    }, [BASE_URL, location.search])

    //to get the messages from the server
    useEffect(() => {
        socket.on('message', (message) => {
            setMessages([...messages, message])
        })
    },[messages])


    const sendMessage = e => {
        e.preventDefault()
        if(message){
            socket.emit('sendMessage', message, () => {
                setMessage('')
            }) 
             
        }
    }

    return (
        <div className="chat-wrapper">
            <div className="chat-body">
            <div className='chat-left'>
                {/* <RoomUsers roomData={roomData} />   */}
            </div>
            <div className='chat-right'>
            <a className='exit' href='/'>exit</a>
                <div className='chat-top'>
                    <ChatBox messages={messages} name={name}/>
                </div>
                <div className='chat-botton'>
                    <Input message={message} setMessage={setMessage} sendMessage={sendMessage} />
                </div>
            </div>
            </div>
        </div>
    )
}
