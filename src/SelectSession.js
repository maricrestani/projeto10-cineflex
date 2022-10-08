import axios from 'axios'
import React from 'react'
import styled from 'styled-components'
import Session from './Session'
import Footer from './Footer'
import { useEffect } from 'react'
import { useState } from "react"
import { useParams } from 'react-router-dom'

export default function SelectSession() {

   const [sessions, setSessions] = useState([])
   const [movieInfo, setMovieInfo] = useState([])
   const { idFilme } = useParams()

   console.log('movieInfo.posterURL e title', movieInfo.posterURL,movieInfo.title)

   useEffect(() => {
      const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${idFilme}/showtimes`)

      promise.then((res) => {
         setSessions(res.data.days)
         setMovieInfo(res.data)
      })

      promise.catch((err) => {
         console.log(err.response.data)
         alert(err.response.data)
      })
   }, [idFilme])

   if (sessions.lenght === 0) {
      return <div>Carregando...</div>
   }

   return (
      <>
         <Section><p>Selecione o horário</p></Section>
         <ContainerSession>
            {sessions.map((session) => <Session key={session.id} session={session} />)}
         </ContainerSession>
         <Footer name={movieInfo.title} img={movieInfo.posterURL} />
      </>
   )

}

const ContainerSession = styled.div`
width: 100%;
margin-top: 177px;
margin-bottom: 117px;
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
background-color: white;
z-index: 1;
`