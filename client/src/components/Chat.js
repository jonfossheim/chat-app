import React, {useEffect, useState} from "react";
import {TextField, Button} from "@material-ui/core";

import ChatInput from './ChatInput'
import ChatMessage from './ChatMessage'

const URL = 'ws://localhost:3030'

const Chat = () => {
    const [name, setName] = useState('')
    const [messages, setMessages] = useState([])

    const ws = new WebSocket(URL)

    const addMessage = (message) => {
        setMessages(state => [...state, message])
    }

    useEffect(() => {
        console.log('connected')
    }, [ws.onopen])

    useEffect(() => {
        ws.onmessage = (evt) => {
            const message = JSON.parse(evt.data)
            addMessage(message)
        }
    }, [ws.onmessage])

    useEffect(() => {
        ws: new WebSocket(URL)
    }, [ws.onclose])

    return (
        <div>
            <TextField
                id="name"
                label="Your name.."
                name={'name'}
                value={name}
                onChange={e => setName(e.target.value)}
                variant="outlined"
            />
            <ChatInput/>
            {messages.map((message, index) =>
                <ChatMessage
                    key={index}
                    message={message.message}
                    name={message.name}
                />,
            )}
        </div>
    )
}

export default Chat
