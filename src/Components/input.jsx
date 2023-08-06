import React from 'react'
import styled from './Input.module.css'
export default function Input(props) {
  return (
    <div className ={styled.form}>
           {/* <lable htmlFor="name"></lable> */}
          <input
            name={props.name}
            type={props.type}
            // id="name"
            placeholder={props.placeholder}
            onChange={
              props.handleChange
            }
          />
    </div>
  )
}
