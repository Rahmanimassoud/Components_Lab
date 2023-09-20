import React, { useState } from "react";

const Component2 = () => {
    const [inputVal, setInputVal] = useState("");

    const [displayText, setDisplayText] = useState("");


    const handleClick = () => {
        setDisplayText(inputVal)
    }

    return (
        <div>
            <h2>{displayText}</h2>
            <input type="text" value={inputVal} onChange={(e)=> setInputVal(e.target.value)}/>
            <button onClick={handleClick}>show this text on screen</button>
        </div>
    )
};

export default Component2;
