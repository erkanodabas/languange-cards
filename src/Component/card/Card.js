import React from "react"
import Item from "../item/Item"
import "./Card.css"
import {categories} from "../helper/data"


const Card = () =>{
    return(
        <div className="cards-area-container">
        <h3 className="languange-title"></h3>
        <div className="cards-container">
        {categories.map((v,i)=>{
            return <Item card={v} key={i} />
        })}

        </div>
        </div>
    )
}

export default Card;