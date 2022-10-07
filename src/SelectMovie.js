import React from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react' 

export default function SelectMovie() {

   const [movies, setMovies] = useState([])


   useEffect(() => {
      const promise = axios.get('https://mock-api.driven.com.br/api/v5/cineflex/movies')

      promise.then((res) => {
          console.log('movies', res.data)
          setMovies(res.data)
      })

      promise.catch((err) => {
          console.log(err.response.data)
          alert(err.response.data)
      })
  }, [])

if (movies.lenght === 0){
  return <div>Carregando...</div>
}
      
   return (
      <>
        <Section><p>Selecione o filme</p></Section>
         <ContainerMovie>
         {movies.map((movie) => <Movie key={movie.id}><img src={movie.posterURL} alt={movie.title} /></Movie>)}    
         </ContainerMovie>
      </>
   )
}


const ContainerMovie = styled.div`

width: 100%;
position: fixed;
top: 177px;
display: flex;
flex-wrap: wrap;
justify-content: center;
align-items: center;
//overflow: scroll;
`
const Movie = styled.div`

width:145px;
height:209px;
margin: 10px 20px;
display: flex;
justify-content: center;
align-items: center;
border-radius: 3px;
box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);

img{
width:129px;
height:193px;
}
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