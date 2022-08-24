//importar modulos react

import React, {Fragment} from "react";

//funciones del componente

const MiComponente= () =>{
    let nombre= "Francisco Alfaro";
    let web="falfarocu.cl"

    let info={
        nombre:"Francisco",
        apellidos:"Alfaro Curiman",
        web:"falfarocu.cl"
    };

return (
    <div className="mi-componente">
    <hr/>
    <h2>Componente Creado</h2>
    <h3>Datos del usuario</h3>
    <ul>
        <li>Nombre: <strong>{info.nombre}</strong></li>
        <li>Apellidos: <strong>{info.apellidos}</strong></li>
        <li>Web: <strong>{info.web}</strong></li>
    </ul>

    <p> Este es mi primer componente</p>
    <ul>
        <li>
            React
        </li>
        <li>
            Angular
        </li>
        <li>
            Vue    
        </li>
    </ul>
    
    </div>
    
    
    );



};



//export

export default MiComponente;