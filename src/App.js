import React,{Fragment , useState , useEffect} from 'react';
import Form from './Components/Form'

function App() {
//deginir el state

const [busquedaLetra, guardarBusquedaLetra] = useState({});

useEffect(() => {

  if(Object.keys(busquedaLetra).length === 0 ) return;

  console.log('no se ejecuta')
},[busquedaLetra])

  return (
    <Fragment>
      <Form
      guardarBusquedaLetra={guardarBusquedaLetra}
      />
    
    </Fragment>
  )
}

export default App;
