/*------Importaciones------*/
import './NavBar.css'
import CardWidget from '../CardWidget/CardWidget.js';





/*-------Logica-----------*/
const NavBar = (props) =>{//solamente retorna una cosa
    return(
        <header>
                <h1> E-commerce Albanese</h1>
                <a href = "#" class="nav_enlace">Home</a>
                <a href = "#" class="nav_enlace">Productos</a>
                <a href = "#"  class="nav_enlace">Categorias</a>
                <CardWidget cantidad = "10"/>   
        </header>
    )
}






/*-------Exportaciones-------*/
export default NavBar;