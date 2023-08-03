import React from 'react'
import ProductsComponent from '../Components/ProductsComponent'
import NavBar from '../Components/NavBar'
import Footer from '../Components/Footer'
import styled from './Products.module.css'
import {useState , useEffect} from 'react'

import axios from 'axios'

export default function Products() {
const [products,setProducts] = useState([])

const [isLoading , setIsLoading] = useState(false)


useEffect(()=>{
  setIsLoading(true)
  axios.get('http://localhost:3001/Product-seri1').then((res)=>{
  setProducts(res.data.data3)
  setIsLoading(false)

}).catch((error)=>{
  console.log(error)
},[])

})
return (
  <div>
      <NavBar/>
      <div className={styled.Container}>

        {isLoading ? ( <p>is loading... </p> ): (

          <div className={styled.allProducts}>
        {products.map((res)=>(
            <ProductsComponent key={res.id} name={res}/>
          ))
        }

      </div>
        )
        }
      </div>
      <Footer/>
    </div>
  )
}
