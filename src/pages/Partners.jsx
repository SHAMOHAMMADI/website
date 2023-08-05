import React from 'react'
import PartnerComponent from '../Components/PartnerComponent'
import NavBar from '../Components/NavBar'
import Footer from '../Components/Footer'
import styled from './Partners.module.css'
import {useState , useEffect} from 'react'
import Spinner from '../Components/Spinner'

import axios from 'axios'

export default function Partners() {
const [partner,setPartner] = useState([])
const [isLoading , setIsLoading] = useState(false)


useEffect(()=>{
  setIsLoading(true)
  axios.get('http://localhost:3001/Product-seri1').then((res)=>{
  setPartner(res.data.data2)
  setIsLoading(false)

  })
},[])


  return (
    <div>
      <NavBar/>
      {isLoading ? ( <div className={styled.center}>

<Spinner />
    </div> ):(
      <div className={styled.allPartner}>

  {partner.map((res)=>(
    <>
    <PartnerComponent key={res.id} name={res}/>
    
    
   </>
  )
  )
}
      </div>
    )
    

}




      <Footer/>
    </div>
  )
}
