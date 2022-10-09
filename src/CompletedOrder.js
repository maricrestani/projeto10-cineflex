import styled from 'styled-components'
import { Link } from 'react-router-dom'

export default function CompletedOrder() {


  return (
    <>
      <Section><p>Pedido feito com sucesso!</p></Section>
      <ContainerOrder>
        <h1>Filme e sessão</h1>
        <h2>Enola Holmes</h2>
        <h2>24/06/2021 15:00</h2>
        <h1>Ingressos</h1>
        <h2>Assento 15</h2>
        <h1>Comprador</h1>
        <h2>Nome: </h2>
        <h2>CPF: </h2>

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

/*
const Container = styled.div`
display: flex;
  width: 80%;
  justify-content: space-between;
  margin: 20px;

button {
  width: 90px;
  font-family: 'Recursive';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #FFFFFF;
  background: blue;
  border-radius: 5px;
  border: 1px solid blue;
  padding:5px;
  cursor: pointer;

    &.error {
      background-color: #FF3030;
    border: #FF3030;
    }
    &.almost {
    background-color: #FF922E;
    border: #FF922E;
    }
    &.correct {
    background-color: #2FBE34;
    border: #2FBE34;
    }

}
`
*/