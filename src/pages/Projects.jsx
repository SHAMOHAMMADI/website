import React, { useEffect } from 'react'
import NavBar from '../Components/NavBar'
import Footer from '../Components/Footer'
import styled from './Projects.module.css'
import axios from 'axios'
import { useState } from 'react'
import ProjectComponent from '../Components/ProjectComponent'
import Spinner from '../Components/Spinner'


export default function Projects() {
    const [data , setData] = useState([])
    const [isLoading , setIsLoading] = useState(false)
    //

    useEffect(()=>{
        setIsLoading(true)
     axios.get('http://localhost:3001/Product-seri1').then((res)=>{
     
     setData(res.data.data3)
     setIsLoading(false)
     
     
    }).catch((error)=>{
     console.log(error)
    })
},[])



console.log(isLoading)
  return (
    <div>
        <div>
            <NavBar/>

            {isLoading ? 
            <div className={styled.center}>

            <Spinner />
                </div> : 
            <div>
                <div className={styled.projectItem}>
                {data.map((res)=>
                     (
                         <ProjectComponent key={res.id} name={res}/>
                     ) )} 
                    
                </div>
            </div>}
                
          
            <Footer/>

        </div>
    </div>
  )
}
