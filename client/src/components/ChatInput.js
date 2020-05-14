import React, {useState} from "react";
import {TextField, Button} from "@material-ui/core";

const ChatInput = () => {
    const [message, setMessage] = useState('')
    const [messageEmpty, setMessageEmpty] = useState(true)

    const handleSubmit = (e) => {
        e.preventDefault()
        setMessage('')

    }

    const handleChange = (input) => {
        let value = input.target.value;
        setMessage(value)
    }

    return(
        <form onSubmit={handleSubmit}>
            <TextField
                id="message"
                label="Your message.."
                name={'message'}
                value={message}
                onChange={handleChange}
                variant="outlined"
            />
            <Button
                type={'submit'}
                variant="contained"
                disabled={messageEmpty}
                color="primary"
            >
                Send
            </Button>
        </form>
    )
}

export default ChatInput
