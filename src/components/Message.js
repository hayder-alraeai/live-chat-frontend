import React from 'react'
import '../styles/components/Message.css'
export default function Message({messages, name }) {
    return (
        <div className='messages-wrapper'>
            {messages.map(m => {

                if(name === m.user){
                    return(
                    <div className='message-wrapper-user'>
                        <div className='message-user'>{m.text}</div><div className='user-user'>{m.user}</div>
                    </div>
                    )
                } else{
                    return(
                    <div className='message-wrapper-client'>
                        <div className='user-client'>{m.user}</div><div className='message-client'>{m.text}</div>
                    </div>
                    )
                }
            })}
        </div>
    )
}
