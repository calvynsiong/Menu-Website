import React from 'react';
import { Buttondiv } from "./Styles/Category";
import { HiMoon } from "react-icons/hi";
import { CgSun } from "react-icons/cg";

const Category = ({ filterItems, category, theme, setTheme }) => {

    
    const changeTheme = () => {
        if (theme === "light") {
            setTheme("dark")
        } else {
            setTheme("light")
        }
    }

    const icon = theme === "light" ? <CgSun></CgSun> : <HiMoon></HiMoon>;

    return (
        <Buttondiv>
            {category.map((time,index) => {
                return <button key={index} onClick={() => { filterItems(time) }}>{time}</button>
                
            })}
            <button onClick={changeTheme}>{icon}</button>
    
        </Buttondiv>
    )
}

export default Category
