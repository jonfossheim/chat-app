import React from "react";

export default ({name, message, time}) =>
    <p>
        <strong>{name}:</strong> <em>{time}</em> <br/>
        {message}
    </p>