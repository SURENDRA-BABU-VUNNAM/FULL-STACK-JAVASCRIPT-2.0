import  {React, useContext } from "react";
import { myContext } from "../src/App";

const UserDetails = () =>{
    const data = useContext(myContext)
    return (
        <>
        <div>My name is : {data.name}</div>
        <div>my color is : {data.color}</div>
        </>
    )
}

export default UserDetails 