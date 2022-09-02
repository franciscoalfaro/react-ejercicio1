import React from 'react'

export const EventosComponentes = () => {

    const hasDadoClick= (e, nombre)=>{
        alert("Has dado click "+nombre);
    }

    function hasDadoDobleClick (e){
      alert("Has dado doble click ");
  }
    const hasEntrado = (e, accion)=>{
      alert(`haz ${accion} a la caja con el mouse`)

    }
    const estasDentro = (e) =>{
      console.log("estas dentro del input");
    }
    const estasFuera = (e) =>{
      console.log("estas fuera del input");
    }
 


  return (
    <div>
        <h1> Eventos en react</h1>
        {/*evento click*/}
        <button onClick={e=>hasDadoClick(e,"Francisco")}>Has click</button>

        {/*evento doble click*/}
        <button onDoubleClick={ hasDadoDobleClick }>Dame doble click</button>


        <div id="caja" onMouseEnter={ e => hasEntrado(e,"entrado")} onMouseLeave={e => hasEntrado(e,"salido")}>
          pasa por encima

        </div>

        <p>
          <input type="text" onFocus={estasDentro} 
          onBlur ={estasFuera}
          placeholder="introduce tu nombre"></input>
        </p>


        
    </div>
  )
}
