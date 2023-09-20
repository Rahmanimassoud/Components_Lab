import React, { useState } from "react";

import './index.css'

const Component5 = () => {

    const [theme, setTheme] = useState("dark")


    const handleToggle = () => {
        setTheme(theme === "light" ? "dark" : "light")
    }



    return (
        <div className={`theme-toggle ${theme}-theme`}>
            <h1>Theme Toggle</h1>
            <button onClick={handleToggle}>Toggle theme</button>
            
        </div>

    )
};

export default Component5;
