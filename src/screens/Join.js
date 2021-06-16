import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import '../styles/Join.css'
export default function Join() {
    const [name, setName] = useState('')
    const [room, setRoom] = useState('')
    return (

        <div className='join-wrapper'>
            <div className='join-title'>Join</div>
            <input type='text' placeholder='Name' onChange={e => setName(e.target.value)} />
            <input type='text' placeholder='Room' onChange={e => setRoom(e.target.value)} />
            <Link to={`/chat?name=${name}&room=${room}`} onClick={e => (!name || !room) ? e.preventDefault() : null} >
                <button type='submit'>Join</button>
            </Link>
        </div>
    )
}
