
import React from 'react'
import "./Products.css"
import product from '../Components/logo/pro.png'

export default function ProductsComponent() {
  return (
    <div>
        <div className="card">
            <img src={product} alt="" />
            <h4>Title</h4>
            <p>Lorem ipsum dolor sit amet.</p>
            <p>star</p>
            <h5>Price</h5>
        </div>
    </div>
  )
}
