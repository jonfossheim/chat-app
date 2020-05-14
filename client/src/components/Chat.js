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

    const submitMessage = (messageString) => {
        // on submitting the ChatInput form, send the message, add it to the list and reset the input
        const message = {name: name, message: messageString}
        ws.send(JSON.stringify(message))

    }

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
            <ChatInput
                ws={ws}
                onSubmitMessage={messageString => submitMessage(messageString)}
            />
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
