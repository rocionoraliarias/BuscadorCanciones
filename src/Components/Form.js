import React,{ useState}  from 'react';

const Formulario = () => {


const [Busqueda, guardarBusqueda] = useState({
    artista: '',
    cancion: ''
})


const [error, guardarError] = useState(false)

const { artista, cancion } = Busqueda
//funcion a cada input para leer su contenido

const acutalizarState = e => {

    guardarBusqueda({
        ...Busqueda,
        [e.target.name] : e.target.value
    })
}

const buscarInformacion = e => {
    e.preventDefault();

    if(artista.trim() === '' || cancion.trim() === ''){
        guardarError(true)
    }

    guardarError(false)
}

    return (  
 <div className="bg-info">
     { error ? <p className=" alert alert-danger text-center p-2">Error! todos los campos deben ser llenados</p> : null }
    <div className="container">
    <div className="row">
        <form
        onSubmit={buscarInformacion}
        className="col card text-white bg-transparent mb-5b mt-5 pb-2"
        >
            <fieldset>
                     <legend className="text-center">Buscador letras canciones</legend>
            <div className="row">
                <div className="col-md-6">
                    <div className="form-group">
                    <label>Artista</label>
                        <input
                        type="text"
                        className="form-control"
                        name="artista"
                        placeholder="Nombre Artista"
                        onChange={acutalizarState}
                        value={artista}
                        />
                    </div>
                </div>
                <div className="col-md-6">
                <div className="form-group">
                        <label>Cancion</label>
                        <input
                        type="text"
                        className="form-control"
                        name="Cancion"
                        placeholder="Nombre Cancion"
                        onChange={acutalizarState}
                        value={cancion}
                        />
                    </div>
                </div>
            </div>
            <button
            type="submit"
            className="btn btn-primary float-right"
            >Buscar</button>
            </fieldset>
        </form>
     </div>
    </div>
 </div>
    );
}
 
export default Formulario;