import React from 'react';

const Info = ({info}) => {
    if(Object.keys(info).length === 0) return null

    const { strArtistThumb ,strBiographyEN } = info
    return ( 
       
<div className="card border-light">
    <div className="card-header bg-primary text-linear">
        Informacion Artista
    </div>
    <div className="card-body">
        <img src={strArtistThumb} alt="Logo Artista" />
        <h2 className="card-text"> Biografia:</h2>
    <p className="card-text">{strBiographyEN}</p>
    </div>
</div>
    
     );
}
 
export default Info;