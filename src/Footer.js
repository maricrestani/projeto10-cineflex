import styled from "styled-components";

export default function Footer(name, img) {

    return (
        <ContainerFooter>
            <div className="img"><img id={name} src={'https://image.tmdb.org/t/p/w500/aKx1ARwG55zZ0GpRvU2WrGrCG9o.jpg'} alt={name} /></div>
            <div>
            <p>Mulan</p>
            <p>Quinta-feira - 15:00</p>
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