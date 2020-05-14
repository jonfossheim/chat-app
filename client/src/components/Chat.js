import React from "react";
import {TextField, Button} from "@material-ui/core";

import ChatInput from './ChatInput'
import ChatMessage from './ChatMessage'

const Chat = () => {
    const [name, setName] = useState('')
    const [messages, setMessages] = useState([])

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
