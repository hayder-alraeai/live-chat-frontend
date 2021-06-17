import React from 'react'
import '../styles/components/ChatBox.css'
import ScrollToBottom from 'react-scroll-to-bottom'
import Message from './Message'
export default function ChatBox({ messages, name }) {
    return (
        <div className='chat-display-wrapper'>
            <ScrollToBottom>
                <Message messages={messages} name={name} />
            </ScrollToBottom>
        </div>
    )
}
