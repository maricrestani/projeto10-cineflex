/*import axios from 'axios'
import { useEffect } from 'react'


export default function Axios() {

    const [images, setImages] = usestate([])

    useEffect(() => {
        const promise = axios.get('https://mock-api.driven.com.br/api/v5/cineflex/movies')

        promise.then((res) => {
            //console.log(res.data)
            setImages(res.data)
        })

        promise.catch((err) => {
            console.log(err.response.data)
        })
    }, [])

if (images.lenght === 0){
    return <div>Carregando...</div>
}

    return (

        { images.map((img) => <Image key={img.id} img={img} />) }

    )


}

// criar um componente para as imagens
// guardar as imagens que chegam dentro de um estado
// 


// Sigle Page Aplications

*/







/*


<BrowseRouter>
        
            <GlobalStyle />
            <Header>CINEFLEX</Header>
            <Section><p>Selecione o horário</p></Section>
            <SelectMovie />

            <Routes>          
                <Route path='/selecionar-horario' element={<SelectTime />} />
           
                <Route path='/selecionar-assento' element={<SelectSeat />} />
           
                <Route path='/pedido-finalizado' element={<CompletedOrder />} />
            </Routes>

            <Link to='/pedido/finalizado'>
                <button>Pedido Finalizado</button>
            </Link>

        </BrowseRouter>
*/