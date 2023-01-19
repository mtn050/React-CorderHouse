/*------Importaciones------*/
import './CardWidget.css'




/*---------Logica-----------*/
const CardWidget = (props) =>{
    return(
        <header>
            <img src="https://images.vexels.com/media/users/3/200097/isolated/preview/942820836246f08c2d6be20a45a84139-icono-de-carrito-de-compras-carrito-de-compras.png" 
             alt="img not found" class="numero"/>{props.cantidad}
        </header>
    )
}






/*-------Exportaciones-------*/
export default CardWidget;