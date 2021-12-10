import React, {useState} from "react";
import Card from "../card/Card";

const Item = ({card})=>{

    const [showLogo, setShowLogo] = useState(true)

    return(
        <div className="card" onClick={()=>setShowLogo(!showLogo)}>
            {showLogo ?
            <>
            <img className="cardLogo" src={card.img} alt="" />
            <h2 className="card-title">{card.title}</h2>
            </> 
            :
            <ul className="list">
                {card.options.map((optElement,index)=>{
                    return <li key={index}>{optElement}</li>
                })}
            </ul>
        }
            </div>
    )
}
export default Item;