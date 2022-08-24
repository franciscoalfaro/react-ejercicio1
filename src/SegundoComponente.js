import React from 'react'

export const SegundoComponente = () => {

    let libros= ["Harry Potter", "Juego de Tronos","Clean Code"];

    //let libros= [];


  return (
    <div className='segundo-componente'>
        <hr/>
        <h1>Listado Libros</h1>

        {libros.length >=1? (
        <ul>
            {
                libros.map((libro, indice)=> {
                    return <li key={indice}>{libro}</li>
                })
            }
        </ul>)
        :(<p> No Hay libros</p>)
    }

    </div>
  )
}
