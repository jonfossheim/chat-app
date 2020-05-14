import React, {useState, useEffect} from "react";
import {TextField, Button} from "@material-ui/core";
import {Flex} from "./Flex";

const ChatInput = (props) => {
    const [message, setMessage] = useState('')
    const [messageEmpty, setMessageEmpty] = useState(true)

    useEffect(() => {
        if (message !== '') {
            setMessageEmpty(false)
        } else {
            setMessageEmpty(true)
        }
    }, [message])

    const handleSubmit = (e) => {
        e.preventDefault()
        props.onSubmitMessage(message)
        setMessage('')

    }

    const handleChange = (input) => {
        let value = input.target.value;
        setMessage(value)
    }

    return(
        <form onSubmit={handleSubmit}>
            <Flex style={{marginTop: '12px'}}>
                <TextField
                    id="message"
                    label="Your message.."
                    name={'message'}
                    value={message}
                    onChange={handleChange}
                    variant="outlined"
                    style={{width: '300px'}}
                />
                <Button
                    type={'submit'}
                    variant="contained"
                    disabled={messageEmpty}
                    color="primary"
                >
                    Send
                </Button>
            </Flex>
        </form>
    )
}

export default ChatInput
