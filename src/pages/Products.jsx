import React from 'react'
import ProductsComponent from '../Components/ProductsComponent'
import axios from 'axios'
import { useEffect , useState} from 'react'
import styled from './Products.module.css'
import NavBar from '../Components/NavBar'
import Footer from '../Components/Footer'
import Spinner from '../Components/Spinner'




export default function Products() {

    const[products , setProducts] = useState([])
    const [isLoading , setIsLoading] = useState(false)


    useEffect(()=>{
      setIsLoading(true)
     axios.get('http://localhost:3001/Product-seri1').then((res)=>{
       setProducts(res.data.data2)
       setIsLoading(false)
     })

    },[])
  return (
    <div>
        <NavBar />
        {isLoading ?   ( <div className={styled.center}>

<Spinner />
    </div> ) : (

        <div className={styled.total}>
        {products.map((res)=>(
        <div className={styled.ProductsWrapper}>

            <ProductsComponent key={res.id} name={res}/>

        </div>))}
        </div>
    )}
        

        <Footer/>
    </div>
  )
}
