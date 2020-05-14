import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {TextField, Button} from "@material-ui/core";

const WelcomeScreen = () => {
    const [displayName, setDisplayName] = useState('')
    const [displayNameEmpty, setDisplayNameEmpty] = useState(true)

    useEffect(() => {
        if(displayName !== ''){
            setDisplayNameEmpty(false)
        }else {
            setDisplayNameEmpty(true)
        }
    },[displayName])
    return (
        <div>
            <h1>Welcome to FossChat!</h1>
            <TextField
                id="name"
                label="Your name.."
                name={'name'}
                value={displayName}
                onChange={e => setDisplayName(e.target.value)}
                variant="outlined"
            />
            <Link to={'/room'}>
                <Button
                    variant="contained"
                    disabled={displayNameEmpty}
                    color="primary"
                >Go to Room</Button>
            </Link>
        </div>
)
}

export default WelcomeScreen
