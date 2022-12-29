/*------Importaciones------*/
import './NavBar.css'
import CardWidget from '../CardWidget/CardWidget.js';





/*-------Logica-----------*/
const NavBar = (props) =>{//solamente retorna una cosa
    return(
        <header>
            <button onClick={props.saludo}>Home</button>
            <button>Productos</button>
            <button>Categorias</button>
           <CardWidget cantidad = "10"/>
        </header>
    )
}






/*-------Exportaciones-------*/
export default NavBar;