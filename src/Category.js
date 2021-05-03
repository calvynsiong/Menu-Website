import React from 'react';
import {Buttondiv } from "./Styles/Category"

const Category = ({filterItems,category}) => {
    return (
        <Buttondiv>
            {category.map((time,index) => {
                return <button key={index} onClick={() => { filterItems(time) }}>{time}</button>
               
            })}
    
        </Buttondiv>
    )
}

export default Category
