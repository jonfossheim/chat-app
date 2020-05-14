import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {TextField, Button} from "@material-ui/core";
import {useDispatch} from "react-redux";
import {
    setDisplayName
} from "../store/actions/displayNameAction";

const WelcomeScreen = () => {
    const [tempName, setTempName] = useState('')
    const [displayNameEmpty, setDisplayNameEmpty] = useState(true)

    const dispatch = useDispatch();

    useEffect(() => {
        if(tempName !== ''){
            setDisplayNameEmpty(false)
        }else {
            setDisplayNameEmpty(true)
        }
        dispatch(setDisplayName(tempName))
    },[tempName, dispatch])

    return (
        <div>
            <h1>Welcome to FossChat!</h1>
            <TextField
                id="name"
                label="Your name.."
                name={'name'}
                value={tempName}
                onChange={e => setTempName(e.target.value)}
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
