import React from 'react'
import styled from 'styled-components'
import DialM from './img/DialM.png'
//import { useState } from "react"

const movieName = 'Dial M for Murder'

export default function SelectMovie() {

   return (
      <>
         <ContainerMovie>
       <Movie><img src={DialM} alt={movieName} /></Movie>  
       <Movie><img src={DialM} alt={movieName} /></Movie>  
       <Movie><img src={DialM} alt={movieName} /></Movie>  
       <Movie><img src={DialM} alt={movieName} /></Movie>  
       <Movie><img src={DialM} alt={movieName} /></Movie>  
       <Movie><img src={DialM} alt={movieName} /></Movie>  
         </ContainerMovie>
      </>
   )

}

//@media (max-width: 500px) 

const ContainerMovie = styled.div`

width: 100%;
position: fixed;
top: 177px;
display: flex;
flex-wrap: wrap;
justify-content: center;
align-items: center;
`
const Movie = styled.div`

width:145px;
height:209px;
margin: 10px 20px;
display: flex;
justify-content: center;
align-items: center;
border-radius: 3px;
box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);

img{
width:129px;
height:193px;
}
`