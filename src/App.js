//import { BrowseRouter, Routes, Route } from 'react-router-dom'
//import { Link } from 'react-router-dom'
import React from 'react'
import styled from 'styled-components'
import GlobalStyle from './GlobalStyle'
import SelectMovie from './SelectMovie'
import SelectSession from './SelectSession'
import SelectSeat from './SelectSeat'
import CompletedOrder from './CompletedOrder'
//import { useState } from "react"

export default function App() {

    return (
        <>
            <GlobalStyle />
            <Header>CINEFLEX</Header>
            <Section><p>Selecione o horário</p></Section>

            {/*<SelectMovie />*/}
            {/*<SelectSession />*/}
            <SelectSeat />
            {/*<CompletedOrder />*/}
        </>
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