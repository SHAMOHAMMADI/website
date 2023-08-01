import React from 'react'
import pic from '../Components/logo/pic/300/project2-min-300x300.jpg'
import styled from './Gallery.module.css'


export default function Gallery(props) {
  return (
    <div className={styled.Items}>
        {/* <img src={pic} alt="" /> */}
        <img src={props.title.url} alt="" />
        {/* <img src={props.title.url} alt="" /> */}
        <h3>Project-{props.title.id}</h3>
        <p>text : {props.title.name}</p>
        <p> {props.title.madeIn}</p>

    </div>
  )
}
