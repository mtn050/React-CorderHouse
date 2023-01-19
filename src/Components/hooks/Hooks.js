//modulos
import { useState } from 'react'
//estilos
import './Hooks.css'






/*-------Logica-----------*/
const Hooks = () =>{//solamente retorna una cosa
// Hooks de estado
// constructor [ESTADO, funcion que actualiza el estado] = inicializacion del estado (valor por default del estado)
    const [contador, set_contador] = useState (0);


    const suma = () =>{
        set_contador (contador + 1); 
    }
   

    const resta = ()=>{
        set_contador (contador - 1)
    }
    return(
        <div>
            <button onClick={suma}>sumar</button>
            <p>{contador}</p>
            <button onClick={resta}>restar</button>
        </div>
    )
// Hook de efecto
//
}






/*-------Exportaciones-------*/
export default Hooks;