import { useState } from 'react'
import styled from 'styled-components'

export default function Seat({id, num, isAvailable, selected, setSelected }) {

    let [seatClicked, setSeatClicked] = useState(false)

    function isSelected(){
    if (!isAvailable) {
        alert('Esse assento não está disponível')
    }
    if (isAvailable && !seatClicked) {
        setSeatClicked(!seatClicked)
        setSelected ([...selected,id])
        return
    }
    else if(isAvailable){
        setSeatClicked(!seatClicked)
        let newSelected = [...selected]
        newSelected = newSelected.filter((seat) => seat !== id)
        setSelected(newSelected)
        return
    }
}   

    return (
        <SeatStyle data-identifier="seat" isAvailable={isAvailable} onClick={isSelected} seatClicked={seatClicked} >{num}</SeatStyle>
    )
}

const SeatStyle = styled.div`
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

background-color: ${props => props.seatClicked ? '#1AAE9E' : props.isAvailable ? '#C3CFD9' : '#FBE192'};
border: 1px solid ${props => props.seatClicked ? '#0E7D71' : props.isAvailable ? '#7B8B99' : '#F7C52B'};

cursor: pointer;
`