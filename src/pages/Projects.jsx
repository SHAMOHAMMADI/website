import React, { useEffect } from 'react'
import NavBar from '../Components/NavBar'
import Footer from '../Components/Footer'
import styled from './Projects.module.css'
import Gallery from '../Components/Gallery'
import axios from 'axios'
import { useState } from 'react'


export default function Projects() {
    const [data , setData] = useState([])
    //
    useEffect(()=>{
     axios.get('http://localhost:3003/Product-seri1').then((res)=>{
     
     setData(res.data.data1)
     
    })
},[])
  return (
    <div>
        <div>
            <NavBar/>
            <div>
                <div className={styled.projectItem}>
                {data.map((res)=>{
                     return (

                         <Gallery key={res.id} title={res}/>
                     )
                    
                        
                        
                     })} 

                    
                </div>
            </div>
            <Footer/>
        </div>
    </div>
  )
}
