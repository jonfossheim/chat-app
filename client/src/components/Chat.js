import React, {useEffect, useState} from "react";
import ChatInput from './ChatInput'
import ChatMessage from './ChatMessage'
import {Button, TextField} from "@material-ui/core";

const URL = 'ws://localhost:3030'

const Chat = () => {
    const [name, setName] = useState('')
    const [nameEmpty, setNameEmpty] = useState(true)
    const [messages, setMessages] = useState([])

    const ws = new WebSocket(URL)

    const handleSubmit = (e) => {
        e.preventDefault()
    }

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

    const enterApp = () => {
        const loginMessage = {name: 'FossBot', message: `${name} has joined the chat!`}
        if (name !== '') {
            setNameEmpty(false)
            ws.send(JSON.stringify(loginMessage))
        } else {
            return
        }
    }

    const submitMessage = (messageString) => {
        // on submitting the ChatInput form, send the message, add it to the list and reset the input
        const message = {name: name, message: messageString}
        ws.send(JSON.stringify(message))

    }

    return (
        <div>
            {
                (nameEmpty) ?
                    <form onSubmit={handleSubmit}>
                        <TextField
                            id="name"
                            label="Your name.."
                            name={'name'}
                            value={name}
                            onChange={e => setName(e.target.value)}
                            variant="outlined"
                        />
                        <Button
                            type={'submit'}
                            variant="contained"
                            onClick={enterApp}
                            color="primary"
                        >Go to Room</Button>
                    </form> :
                    <div>
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
            }
        </div>
    )
}

export default Chat
