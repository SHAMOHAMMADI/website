import React from 'react'
import ProductsComponent from '../Components/ProductsComponent'
import NavBar from '../Components/NavBar'
import Footer from '../Components/Footer'
import styled from './Products.module.css'

export default function Products() {
  return (
    <div>
      <NavBar/>
      <div className={styled.allProducts}>

      <ProductsComponent/>
      <ProductsComponent/>
      <ProductsComponent/>
      <ProductsComponent/>
      <ProductsComponent/>
      <ProductsComponent/>
      <ProductsComponent/>
      <ProductsComponent/>
      <ProductsComponent/>
      <ProductsComponent/>



      </div>
      <Footer/>
    </div>
  )
}
