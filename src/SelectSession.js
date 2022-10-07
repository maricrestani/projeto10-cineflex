import axios from 'axios'
import React from 'react'
import styled from 'styled-components'
import Session from './Session'
import { useEffect } from 'react'
import { useState } from "react"

export default function SelectSession() {

   const [sessions, setSessions] = useState([])
 

   useEffect(() => {
      const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/2/showtimes`)

      promise.then((res) => {
          setSessions(res.data.days)
      })

      promise.catch((err) => {
          console.log(err.response.data)
          alert(err.response.data)
      })
  }, [])

if (sessions.lenght === 0){
  return <div>Carregando...</div>
}

   return (
      <>
        <Section><p>Selecione o horário</p></Section>
         <ContainerSession>
         {sessions.map((session) => <Session key={session.id} session={session} />)}
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

const Section = styled.div`

width: 100%;
height:110px;
position: fixed;
top: 67px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
font-family: 'Roboto';
font-weight: 400;
font-size: 24px;
color: #293845;
`