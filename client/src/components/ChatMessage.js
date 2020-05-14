import React, {useState} from "react";

export default (props) => {
    const [edited, setEdited] = useState(false)

    return(
        <div>
            <p>
                <strong>{props.name}:</strong> <em>{props.time}</em> <br/>
                {props.message}
                <br/>
                {edited ? <em>edited</em> : null}
            </p>
            {props.children}
        </div>
    )
}
