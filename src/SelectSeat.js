import React from 'react'
import styled from 'styled-components'
import { useState } from "react"


export default function SelectSeat() {

   const [name, setName] = useState('')
   const [cpf, setCPF] = useState('')

   return (
      <>
         <ContainerSeat>
            <> <Seat>01</Seat>
               <Seat>02</Seat>
               <Seat>03</Seat>
               <Seat>04</Seat>
               <Seat>05</Seat>
               <Seat>06</Seat>
               <Seat>07</Seat>
               <Seat>08</Seat>
               <Seat>09</Seat>
               <Seat>10</Seat>
            </>
            <Seat>01</Seat>
            <Seat>02</Seat>
            <Seat>03</Seat>
            <Seat>04</Seat>
            <Seat>05</Seat>
            <Seat>06</Seat>
            <Seat>07</Seat>
            <Seat>08</Seat>
            <Seat>09</Seat>
            <Seat>10</Seat>
            <Seat>01</Seat>
            <Seat>02</Seat>
            <Seat>03</Seat>
            <Seat>04</Seat>
            <Seat>05</Seat>
            <Seat>06</Seat>
            <Seat>07</Seat>
            <Seat>08</Seat>
            <Seat>09</Seat>
            <Seat>10</Seat>
            <Seat>01</Seat>
            <Seat>02</Seat>
            <Seat>03</Seat>
            <Seat>04</Seat>
            <Seat>05</Seat>
            <Seat>06</Seat>
            <Seat>07</Seat>
            <Seat>08</Seat>
            <Seat>09</Seat>
            <Seat>10</Seat>
            <Seat>01</Seat>
            <Seat>02</Seat>
            <Seat>03</Seat>
            <Seat>04</Seat>
            <Seat>05</Seat>
            <Seat>06</Seat>
            <Seat>07</Seat>
            <Seat>08</Seat>
            <Seat>09</Seat>
            <Seat>10</Seat>
         </ContainerSeat>

         <ContainerSeatLabel>
            <SeatLabel> <Seat className='selected' /> Selecionado</SeatLabel>
            <SeatLabel> <Seat className='available' />Disponível</SeatLabel>
            <SeatLabel> <Seat className='unavailable' />Indisponível</SeatLabel>
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

      </>
   )
}

const ContainerSeat = styled.div`

width: 100%;
position: fixed;
top: 150px;
display: flex;
flex-wrap: wrap;
justify-content: center;
align-items: center;
`

const Seat = styled.div`

width: 26px;
height: 26px;
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
      width: 24px;
      height: 24px;
      background-color: #1AAE9E;
      border: 1px solid #0E7D71;
    }
&.available {
      width: 24px;
      height: 24px;
      background-color: #C3CFD9;
      border: 1px solid #7B8B99;
    }
&.unavailable {
      width: 24px;
      height: 24px;
      background-color: #FBE192;
      border: 1px solid #F7C52B;
    }

`

const ContainerSeatLabel = styled.div`
width: 100%;
position: fixed;
top: 350px;
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
top: 420px;
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