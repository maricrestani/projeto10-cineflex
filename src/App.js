import React from 'react'
import styled from 'styled-components'
import GlobalStyle from './GlobalStyle'
import SelectMovie from './SelectMovie'
import SelectSession from './SelectSession'
import SelectSeat from './SelectSeat'
import CompletedOrder from './CompletedOrder'
import { BrowserRouter, Routes, Route } from "react-router-dom"

export default function App() {

    return (
            <BrowserRouter>
                <GlobalStyle />
                <Header>CINEFLEX</Header>
                <Routes>
                <Route path='/' element={<SelectMovie />}/>
                <Route path='/sessoes/:idFilme' element={<SelectSession />} />
                <Route path='/assentos/:idSessao' element={<SelectSeat />} />
                <Route path='/sucesso' element={<CompletedOrder />} />
                </Routes>
            </BrowserRouter>
    )
}

const Header = styled.div`

width: 100%;
height:67px;
background-color: #C3CFD9;
position: fixed;
top: 0;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
font-family: 'Roboto';
font-weight: 400;
font-size: 34px;
color: #E8833A;
`