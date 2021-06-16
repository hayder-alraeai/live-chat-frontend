import React, { useState, useEffect} from 'react'
import '../styles/Chat.css'
import queryString from 'query-string'
import io from 'socket.io-client'


let socket;
export default function Chat({ location }) {
    const [name, setName] = useState('')
    const [room, setRoom] = useState('')
    const [message, setMessage] = useState('')
    const [messages, setMessages] = useState([])
    const BASE_URL = 'http://localhost:5000'
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
    console.log(message, messages);
    return (
        <div>
            <input type='text' onChange={e => setMessage(e.target.value)}
                                onKeyPress={e => e.key === 'Enter' ? sendMessage(e) : null}
            />
        </div>
    )
}
