import styled from "styled-components"

export default function Session({session}) {

return (
    <SessionDiv>
<p>{session.weekday} - {session.date}</p>
        <div>
            <button>{session.showtimes[0].name}</button>
            <button>{session.showtimes[1].name}</button>
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