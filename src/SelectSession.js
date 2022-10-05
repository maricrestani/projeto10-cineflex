import React from 'react'
import styled from 'styled-components'
//import { useState } from "react"

export default function SelectSession() {

   return (
      <>
         <ContainerSession>
            <Session>
               <p>Quinta-feira - 24/06/2021</p>
               <div>
                  <button>09:00</button>
                  <button>15:00</button>
               </div>
            </Session>

         </ContainerSession>
      </>
   )

}

const ContainerSession = styled.div`
width: 100%;
position: fixed;
top: 177px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

const Session = styled.div`
width: 100%;
margin: 0px auto 22px;


div{
display: flex;
}

button{
margin-top: 22px;
margin-left: 22px;
width:82px;
height:43px;
background-color: #E8833A;
margin-left: 18px;
font-family: Roboto;
font-weight: 400px;
font-size: 20px;
color: white;
border-radius: 3px;
border:none;
cursor: pointer;
}

p{
margin-left: 22px;
font-family: Roboto;
font-weight: 400px;
font-size: 20px;
color:#293845;
}
`