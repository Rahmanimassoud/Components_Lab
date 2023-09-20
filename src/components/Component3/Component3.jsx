import React, { useState } from "react";

const Component3 = () => {

    const [names, setNames] = useState(["Mike", "Joe", "Jorden", "Pence", "Sam"])

    const [randomIndex, setRandomIndex] = useState(null);

        // rabdom name selector function
    const selectRandomName = () => {
        const newIndex = Math.floor(Math.random() * names.length)
        setRandomIndex(newIndex)
    };


    // function for currently selected name
    const currentName =()=> {
        if(randomIndex !== null){
            return names[randomIndex]
        }
        return "Select a name"
    }


    return (
        <div>
            <h1>You selected: {currentName()}</h1>
            <button onClick={selectRandomName}>
                slect a random Name
            </button>
        </div>
    )
};

export default Component3;
