import React from 'react'
import styled from './Partner.module.css'
import Partners from '../pages/Partners'


export default function PartnerComponent(props) {
  return (
    <div className={styled.PartnerWrapper}>
        <div className={styled.LogoWrapper}>
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
