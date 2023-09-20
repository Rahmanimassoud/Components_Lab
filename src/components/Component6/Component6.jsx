import React, { useState } from "react";

const Component6 = ({product}) => {

    const [isVisible, setIsVisible] = useState(true);

    const handleVisibleToggle = ()=> {
        setIsVisible( ! isVisible )
    }


    return (
        <div>
            <h2>{product.title}</h2>
            <button onClick={handleVisibleToggle}>Toggle Desc</button>
            {isVisible ? <p>{product.description}</p> : <>No Description</>}
        </div>
    )
};

export default Component6;
