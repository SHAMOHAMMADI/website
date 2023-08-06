import React from "react";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import styled from "./LogIn.module.css";
import low4 from "../Components/logo/pic/loginpic/low4.jpg";
import {useState} from 'react'
import Input from "../Components/input";
import axios from "axios";
import { useRouteError } from "react-router-dom";
export default function LogIn() {


  
  // const [newUser , setNewUser] = useState("")

  const [newUser , setNewUser] = useState({
    
    fname : "" ,
    lname : "" , 
    username : "" ,
    password : "" ,
  })
  
  const handleOnChange = (e) => {
    // setNewUser(e.target.name , e.target.value)
    // console.log(e.target.name , e.target.value)
    //first way 
        setNewUser((prevState)=>({
          ...prevState ,
          [e.target.name] : e.target.value
        }))
        
      };

      const handleCreateNewUser = (prevState)=>{
        axios.post("http://localhost:3004/newUser/:id",{
          id : 67, 
          fname : newUser.fname,
          lname : newUser.lname , 
          username : newUser.username,
          password : newUser.password,
        })
      }
    //end of first way

//second way 
// switch (e.target.name){
  //   case "fname" :
  //     setNewUser((prevState)=>(
    //       {
      //        ...prevState ,
      //      fname: e.target.value 
      //     }
      //     ))
      //     break;
      
      //     case "lname" :
      //       setNewUser((prevState)=>(
        //         {
          //          ...prevState ,
          //        lname: e.target.value 
          //       }
          //       ))
          //       break;
    
          //     case "username" :
          //       setNewUser((prevState)=>(
    //         {
      //          ...prevState ,
    //        username: e.target.value 
    //       }
    //       ))
    //        break;
    
    //        case "password" :
    //         setNewUser((prevState)=>(
      //           {
        //            ...prevState ,
        //          password: e.target.value 
        //         }
        //         ))
        //          break;
        
        //   }
        
        //end second way
      // console.log(newUser)
      
      return (
    <div>
      <NavBar />
      
      <div className={styled.formBox}>
        {/* <img src={low4} alt="" /> */}
        <form action="" className={styled.form}>
          {/* <lable htmlFor="name"></lable>
          <input
          name="fname"
          type="text"
          id="name"
          placeholder="نام"
          onChange={
              handleOnChange
            }
            />
            <lable htmlfor="lastName"></lable>
            <input
            name="lname"
            type="text"
            id="lastName"
            placeholder="نام خانوادگی "
            onChange={
              handleOnChange
            }
            />
            <lable htmlfor="userName"></lable>
            <input
            name="username"
            type="text"
            id="userName"
            placeholder="نام کاربری "
            onChange={
              handleOnChange
            }
          />
          <lable htmlfor="password"></lable>
          <input
          name="password"
          type="password"
          id="password"
          placeholder=" رمز عبور "
          onChange={
            handleOnChange
          }
          />
          <lable htmlfor="password"></lable>
          <input
            name="password"
            type="password"
            id="password"
            placeholder="تکرار رمز عبور"
            onChange={
              handleOnChange
            }
          /> */}
          <h4>ثبت نام</h4>
          <Input name="fname" placeholder="نام" type="text" handleChange={handleOnChange}/>
          <Input name="lname" type="text" handleChange={handleOnChange} placeholder="نام خانوادگی"/>
          <Input name="username" type="text" handleChange={handleOnChange} placeholder="کلمه کاربری"/>
          <Input name="password" type="password" handleChange={handleOnChange} placeholder="پسورد"/>
          <Input name="password" type="password" handleChange={handleOnChange} placeholder=" تکرار پسورد"/>
          <button onClick ={handleCreateNewUser}className={styled.button} >ثبت نام</button>
        </form>
      </div>
      <div className={styled.image}>{/* <img src={low} alt="" /> */}</div>
      <Footer />
    </div>
  );
}
 