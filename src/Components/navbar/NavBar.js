/*------Importaciones------*/
import './NavBar.css'





/*-------Logica-----------*/
const NavBar = (props) =>{//solamente retorna una cosa
    return(
        <header>
            <button onClick={props.saludo}>Saludar</button>
            <button>chau</button>
            <button>chau2</button>
            <button>chau3</button>
        </header>
    )
}






/*-------Exportaciones-------*/
export default NavBar;