import React from 'react'
import NavBar from '../Components/NavBar'
import styled from './Home.module.css'
import Footer from '../Components/Footer'
import mainpic from '../Components/logo/main11.jpg'

export default function Home() {
  return (
    <div>
        <NavBar/>
        <div className={styled.home}>
            <p>text</p>
            <p>text</p>
            <p>text3</p>


        
 <img src={mainpic} alt="" />
        </div>
        <Footer/>
    </div>
  )
}
