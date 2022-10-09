import React from 'react'
import styled from 'styled-components'
import axios from 'axios'
import Seat from './Seat'
import Footer from './Footer'
import { useState } from "react"
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'


export default function SelectSeat() {

   const { idSessao } = useParams()

   const [movie, setMovie] = useState({
      seats: [],
      movie: { posterURL: '', title: '' },
      day: { weekday: '' },
      name: ''
   })

   const [selected, setSelected] = useState([])

   const [name, setName] = useState('')
   const [cpf, setCPF] = useState('')


   useEffect(() => {
      const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idSessao}/seats`)

      promise.then((res) => {
         setMovie(res.data)
      })

      promise.catch((err) => {
         console.log(err.response.data)
      })
   }, [idSessao])

   if (movie.lenght === 0) {
      return <div>Carregando...</div>
   }

   return (
      <>
         <Section><p>Selecione o(s) assentos(s)</p></Section>
     
         <ContainerSeat>
            {movie.seats.map((seat) => 
            <Seat 
            key={seat.id} 
            id={seat.id} 
            name={seat.name} 
            isAvailable={seat.isAvailable} 
            selected={selected} 
            setSelected={setSelected} 
            />)} 
         </ContainerSeat>

         <ContainerSeatLabel>
            <SeatLabel> <SeatStyle className='selected' /> Selecionado</SeatLabel>
            <SeatLabel> <SeatStyle className='available' />Disponível</SeatLabel>
            <SeatLabel> <SeatStyle className='unavailable' />Indisponível</SeatLabel>
         </ContainerSeatLabel>

         <ContainerCustomerData>
            <p>Nome do comprador:</p>
            <input
               type="text"
               placeholder="Digite seu nome ..."
               value={name}
               onChange={(e) => setName(e.target.value)}
            />
            <p>CPF do comprador:</p>
            <input
               type="number"
               placeholder="Digite seu CPF ..."
               value={cpf}
               onChange={(e) => setCPF(e.target.value)}
            />
         </ContainerCustomerData>

         <ContainerBookButton>
            <button className='bookSeat'>Reservar assento(s)</button>
         </ContainerBookButton>
         <Footer name={movie.movie.title} img={movie.movie.posterURL} weekday={movie.day.weekday} time={movie.name} />

      </>
   )
}

const ContainerSeat = styled.div`

width: 100%;
margin-top: 177px;
margin-bottom: 117px;
display: flex;
flex-wrap: wrap;
justify-content: center;
align-items: center;
`

const SeatStyle = styled.div`

width: 24px;
height: 24px;
left: 24px;
top: 158px;
background-color: #C3CFD9;
border: 1px solid #808F9D;
border-radius: 15px;
display: flex;
justify-content: center;
align-items: center;
margin:5px ;

font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 12px;
color: black;

&.selected {
      background-color: #1AAE9E;
      border: 1px solid #0E7D71;
    }
&.available {
      background-color: #C3CFD9;
      border: 1px solid #7B8B99;
    }
&.unavailable {
      background-color: #FBE192;
      border: 1px solid #F7C52B;
    }

`

const ContainerSeatLabel = styled.div`
width: 100%;
position: fixed;
top: 380px;
display: flex;
justify-content: space-around;

`
const SeatLabel = styled.div`

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

font-family: Roboto;
font-weight:400px;
font-size:13px;
color:#4E5A65;
`

const ContainerCustomerData = styled.div`

position: fixed;
top: 450px;
left: 24px;

p{
   font-family: Roboto;
font-weight:400px;
font-size:18px;
color:#293845;
margin: 8px 0px;
}

input{

   width:327px;
height:51px;
font-family: Roboto;
font-weight:400px;
font-size:18px;
font-style: italic;
border: 1px solid #AFAFAF;
border-radius: 3px;

}

`
const ContainerBookButton = styled.div`
width: 100%;
position: fixed;
top: 650px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

button{
   width: 225px;
height: 42px;
background-color: #E8833A;
border: #E8833A;
border-radius: 3px;
font-family: Roboto;
font-weight:400px;
font-size:18px;
color: white;
}

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