
import React from 'react'
import "./Project.css"
import p from '../Components/logo/pro.png'

export default function ProjectComponent(props) {
  return (
    <div>
        <div className="card">
            <img src={props.name.URL} alt="" />
            <h4>لورم ایپسوم</h4>
            <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
</p>
            <h5>قیمت</h5>
            <h4>{props.name.id}</h4>
        </div>
    </div>
  )
}