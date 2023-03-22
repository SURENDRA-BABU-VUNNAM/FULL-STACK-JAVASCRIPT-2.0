import React from "react";
import {Link, Outlet} from "react-router-dom"

function Header (){
    return (
        <>
        <nav>
            <Link to='/'>Home</Link>|||
            <Link to= '/about'>About</Link>|||
            <Link to='/contact'>Contact Us</Link>
        </nav>
        <Outlet/>
        </>

    )
}

export default Header