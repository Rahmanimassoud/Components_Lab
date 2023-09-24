import React, { useState } from "react";


const Component1 = () => {
    const [count, setCount] = useState(0);


    // let's handel the negative case
    // check is the count is greater than zero before decrementing
    const handelSubtract = () => {
        setCount((prevCount) => prevCount > 0 ? prevCount -1 : 0)
    }

    return (
        <div>
            <p>Count is: {count}</p>
            <button onClick={()=> setCount((prevCount) => prevCount + 1)}>
                add count
            </button>

            <button onClick={handelSubtract}>
                sub-count
            </button>
        </div>
    )
};

export default Component1;



