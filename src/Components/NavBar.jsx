import React from 'react'
import {Link} from 'react-router-dom'
import styled from './NavBar.module.css'
import Logo from './logo/blackLogo.png'


const NavBar = () =>{
    return (
        <div className={styled.navBar}>
        <ul>
            <img src={Logo} alt="" />
            <li><Link to="/Home">خانه</Link></li>
            <li><Link to="/Products">محصولات</Link></li>
            <li><Link to="/Projects">پروژه</Link></li>
            <li><Link to="/Partners">همکاران</Link></li>
            <li><Link to="/ContactUs">تماس با ما</Link></li>
        </ul>
           
        </div>
    )
}


export default NavBar ;