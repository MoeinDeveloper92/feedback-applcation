import React from 'react'
import spinner from "../assets/spinner.gif"
const Spinner = () => {
    return (
        <div>
            <img src={spinner} style={{ width: "100px", display: "block", margin: "auto" }} alt="Loading..." />
        </div>
    )
}

export default Spinner