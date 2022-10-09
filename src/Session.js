import styled from "styled-components"
import { Link } from "react-router-dom"

export default function Session({ session }) {

    return (
        <SessionDiv>
            <p>{session.weekday} - {session.date}</p>
            <div>
                <Link to={`/assentos/${session.showtimes[0].id}`}>
                    <button>{session.showtimes[0].name}</button>
                </Link>
                <Link to={`/assentos/${session.showtimes[1].id}`}>
                    <button>{session.showtimes[1].name}</button>
                </Link>
            </div>
        </SessionDiv>
    )
}


const SessionDiv = styled.div`
width: 100%;
margin: 0px auto 22px;


div{
display: flex;
}

button{
margin-top: 22px;
margin-left: 23px;
width:82px;
height:43px;
background-color: #E8833A;
font-family: Roboto;
font-weight: 400px;
font-size: 20px;
color: white;
border-radius: 3px;
border:none;
cursor: pointer;
}

p{
margin-left: 23px;
font-family: Roboto;
font-weight: 400px;
font-size: 20px;
color:#293845;
}
`