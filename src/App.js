import React,{Fragment , useState , useEffect} from 'react';
import Form from './Components/Form';
import Cancion from './Components/Cancion'
import axios from 'axios'

function App() {
//deginir el state

const [busquedaLetra, guardarBusquedaLetra] = useState({});
const [letra , guardarLetra] = useState('')
useEffect(() => {

  if(Object.keys(busquedaLetra).length === 0 ) return;

const consultarAPILetra = async () => {
const {artista , cancion} = busquedaLetra
 const url =  `https://api.lyrics.ovh/v1/${artista}/${cancion}`

  const resultado = await axios(url);

  guardarLetra(resultado.data.lyrics)
}

consultarAPILetra()

},[busquedaLetra])

  return (
    <Fragment>
      <Form
      guardarBusquedaLetra={guardarBusquedaLetra}
      />
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">
            
          </div>
          <div className="col-md-6">
          <Cancion
          letra = {letra}
          />
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default App;
