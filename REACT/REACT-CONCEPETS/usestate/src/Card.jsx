import React from "react";


function Card({myname,list,details}) {
    // console.log(Props);
    return(
        <>
        <h3>this is cards</h3>
        <div>{details.gender}</div>
        <h2>{details.name?.first}</h2>
        <ul>
            {list.map((l)=>(
                <li key={l}>{l}</li>
            ))}
        </ul>
        </>
    )
}

export default Card

