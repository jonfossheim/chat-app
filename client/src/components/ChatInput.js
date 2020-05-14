import React, {useState} from "react";

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
        <>
        </>
    )
}

export default ChatInput
