import React from "react";
import DemonstracaoLista from "./DemonstracaoLista";

export default ()=>{

    const listaCarros=['Fusca', 'Renegade', 'Livinia', 'Ferrari', 'Pálio', 'Fiesta', 'Porche', 'HB20', 'Clio', 'Fiat Uno']

    return(
        <DemonstracaoLista>
        <ul>
            {listaCarros.map(carros=><li>{carros}</li>)}
        </ul>
                
        </DemonstracaoLista>
    )
}
