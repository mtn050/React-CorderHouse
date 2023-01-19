//estilos
import './ItemCount.css'
//core
import { useState } from 'react';





/*-------Logica-----------*/
const ItemCount = (props) =>{//solamente retorna una cosa

     const [contador, set_contador] = useState (0);
            
            
    const suma = () =>{
        if(contador >= props.stock){
            set_contador (contador)
        }else{
        set_contador (contador + 1); 
        }
    }
               
            
    const resta = ()=>{
        if(contador === 0){
            
        }else{
        set_contador (contador - 1)
        }
    }
    const add = ()=>{
        console.log (contador)
    }
    return(
        <div>
            <button onClick={suma}>sumar</button>
            <p>{contador}</p>
            <button onClick={resta}>restar</button>
            <button onClick={add}> <img className = "imagenC" src="https://cdn-icons-png.flaticon.com/512/70/70021.png" 
             alt="img not found" /></button>
        </div>
                )
            
            }








/*-------Exportaciones-------*/
export default ItemCount;