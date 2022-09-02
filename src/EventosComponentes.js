import React from 'react'

export const EventosComponentes = () => {

    const hasDadoClick= (e, nombre)=>{
        alert("Has dado click "+nombre);
    }



  return (
    <div>
        <h1> Eventos en react</h1>
        {/*evento click*/}
        <button onClick={e=>hasDadoClick(e,"Francisco")}>Has click</button>
    </div>
  )
}
