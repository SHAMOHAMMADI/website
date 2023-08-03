import React from 'react'
import PartnerComponent from '../Components/PartnerComponent'
import NavBar from '../Components/NavBar'
import Footer from '../Components/Footer'
import styled from './Partners.module.css'
import {useState , useEffect} from 'react'

import axios from 'axios'

export default function Products() {
const [partner,setPartner] = useState([])


useEffect(()=>{
  axios.get('http://localhost:3001/Product-seri1').then((res)=>{
  setPartner(res.data.data2)
  })
},[])


  return (
    <div>
      <NavBar/>
      <div className={styled.allPartner}>
{
  partner.map((res)=>(
   <>
    {/* <PartnerComponent key={res.id} name={res}/> */}
    
    
   </>
  )
  )

}




      </div>
      <Footer/>
    </div>
  )
}
