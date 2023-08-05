
import React from 'react'
import NavBar from '../Components/NavBar'
import Footer from '../Components/Footer'
import styled from './LogIn.module.css'
import low4 from '../Components/logo/pic/loginpic/low4.jpg'


export default function LogIn() {
  return (
    <div>
      <NavBar/>
      <div className={styled.formBox}>

        {/* <img src={low4} alt="" /> */}
      <form action="" className={styled.form}>
        <h4>ثبت نام</h4>
        <lable htmlfor="name" ></lable>
        <input type="text" id="name" placeholder="نام" />
        <lable htmlfor="lastName" ></lable>
        <input type="text" id="lastName" placeholder="نام خانوادگی " />
        <lable htmlfor="userName" ></lable>
        <input type="text" id="userName" placeholder="نام کاربری " />
        <lable htmlfor="password" ></lable>
        <input type="password" id="password" placeholder=" رمز عبور " />
        <lable htmlfor="password" ></lable>
        <input type="password" id="password" placeholder="تکرار رمز عبور" />
         <button className={styled.button}>ثبت نام</button>
      </form>
      </div>
      <div className={styled.image}>
        {/* <img src={low} alt="" /> */}
      </div>
      <Footer/>
    </div>
  )
}
