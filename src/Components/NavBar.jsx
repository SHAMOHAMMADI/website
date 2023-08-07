import React from 'react'
import {Link} from 'react-router-dom'
import styled from './NavBar.module.css'
import Logo from './logo/FinalLogo.png'
import Input from './input'
import { CiSearch } from "react-icons/ci";



const NavBar = () =>{
    return (
        <div className={styled.navBar}>
        <ul className={styled.medium}>
            <div className={styled.logo}>
            <img src={Logo} alt="" />

            </div>
            <li><Link to="/Home">خانه</Link></li>
            <li> <Link to="/Products">محصولات</Link></li>
            <li><Link to="/Projects">پروژه</Link></li>
            <li><Link to="/Partners">همکاران</Link></li>
            <li><Link to="/ContactUs">تماس با ما</Link></li>

           <li className={styled.login}><Link to="/LogIN">ورود کاربر</Link></li>
            <div className={styled.search}>
            <Input />
            <CiSearch style={{width:""}}/>
            </div>
        </ul>
           
        </div>
    )
}


export default NavBar ;