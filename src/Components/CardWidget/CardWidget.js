/*------Importaciones------*/
import './CardWidget.css'




/*-------Logica-----------*/
const CardWidget = (props) =>{
    return(
        <header>
         <img src="https://i.pinimg.com/736x/6e/90/9e/6e909ea80005ab34d61ee144686c40ee.jpg" alt="img not found"
         width="50px" heigth="50px"/>
         <p>el numero es = {props.cantidad}</p>
        </header>
    )
}






/*-------Exportaciones-------*/
export default CardWidget;