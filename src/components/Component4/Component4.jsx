import React, { useState } from "react";

const Component4 = () => {

    const [names, setNames] = useState([]);

    const [inputVal, setInputVal] = useState("");

    const handleSubmit = (e)=> {
        e.preventDefault();
        setNames([...names, inputVal]);
        setInputVal("")
    }
    
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" value={inputVal} onChange={(e)=> setInputVal(e.target.value)}/>
                <button type="submit">Add a name</button>
            </form>
            <ul>
                {names.map((eachName, index) => {
                    return <li key={index}>{eachName}</li>
                })}
            </ul>
        </div>
    
    
    
        )
};

export default Component4;
