
import React from 'react'
import NavBar from '../Components/NavBar'
import Footer from '../Components/Footer'
import Not from '../Components/logo/pic/compLogo/404.png'
import styled from './Not404.module.css'

export default function Not404() {
  return (
    <div>
        <NavBar/>
        <div className={styled.image1}>

        <img src={Not} alt="" />
        </div>
        <Footer/>

    </div>
  )
}
