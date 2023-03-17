import  {React, useContext } from "react";
import { myContext } from "../src/App";

const Button = () => {
    const data = useContext(myContext)
    return (
        <div style={{backgroundColor: data.color}}>button</div>
    )
}

export default Button 