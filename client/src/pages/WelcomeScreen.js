import React from "react";
import {Link} from "react-router-dom";

const WelcomeScreen = () => {
    return (
        <div>
            <h1>Welcome to FossChat!</h1>
            <Link to="/room">Room</Link>
        </div>
)
}

export default WelcomeScreen
