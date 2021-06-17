import React from 'react'
import '../styles/components/Input.css'
export default function Input({message, setMessage, sendMessage}) {
    return (
        <div className='input-wrapper'>
            <input type='text' value={message} onChange={e => setMessage(e.target.value)}
                                onKeyPress={e => e.key === 'Enter' ? sendMessage(e) : null}
            />
            <button onClick={(e) => sendMessage(e)}>Send</button>
        </div>
    )
}