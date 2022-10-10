import styled from 'styled-components'
import { Link } from 'react-router-dom'

export default function CompletedOrder({data}) {

  return (
    <>
      <Section><p>Pedido feito com sucesso!</p></Section>
      <ContainerOrder>
        <h1>Filme e sessão</h1>
        <h2>{data.title}</h2>
        <h2>{data.day} {data.time}</h2>
        <h1>Ingressos</h1>
        {data.seats.map((seat) => <h2 key={seat}>Assento {seat}</h2>)}
        <h1>Comprador</h1>
        <h2>Nome: {data.buyer}</h2>
        <h2>CPF: {data.cpf}</h2>

        <ContainerButton>
          <Link to={`/`}>
          <button>Voltar para Home</button>
          </Link>
        </ContainerButton>

      </ContainerOrder>

    </>
  )

}

const ContainerButton = styled.div`
margin-top: 60px;
width: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

const ContainerOrder = styled.div`
width: 100%;
position: fixed;
top: 177px;
color: #293845;

h1{
margin-top: 20px;
margin-left: 29px;
font-family: Roboto;
font-weight:bold;
font-size:24px;

}

h2{
margin-left: 29px;
margin-top: 10px;
font-family: Roboto;
font-weight:400px;
font-size:22px;
}

button{
width:225px;
height:42px;
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
`

const Section = styled.div`
background-color: red;
width: 100%;
height:110px;
position: fixed;
top: 67px;
display: flex;
align-items: center;
justify-content: center;
font-family: 'Roboto';
font-weight: 700;
font-size: 24px;
color: #247A6B;
background-color: white;
z-index: 1;
`