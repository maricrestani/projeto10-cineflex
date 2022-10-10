import styled from "styled-components";

export default function Footer({name, img, weekday, time}) {

    return (
        <ContainerFooter>
            <div data-identifier="movie-img-preview" className="img"><img src={img} alt={name} /></div>
            <div data-identifier="movie-and-session-infos-preview">
            <p>{name}</p>
            <p>{weekday} {time}</p>
            </div>
        </ContainerFooter>
    )

}

const ContainerFooter = styled.div`
background-color: #DFE6ED;
border: 1px solid #9EADBA;
width: 100%;
height:117px;
position: fixed;
bottom: 0px;
display: flex;
align-items: center;


.img{
    margin-left: 22px;
background-color: white;
width: 64px;
height: 89px;
box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
border-radius: 2px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
}

img{
width: 48px;
height: 72px;
}

p{
font-family:Roboto;
font-weight:400px;
font-size:26px;
color:#293845;
margin-left: 14px;
margin-bottom: 2px;
}

`