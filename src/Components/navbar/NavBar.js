/*------Importaciones------*/
import './NavBar.css'
import CardWidget from '../cardwidget/CardWidget.js';
import { Link } from 'react-router-dom';




/*-------Logica-----------*/
const NavBar = (props) =>{//solamente retorna una cosa
    return(
        <header>
                    <h1> E-commerce Albanese</h1>
        
                    <li className='nav_enlace'><Link to= '/'>Home</Link></li>
                    <li className='nav_enlace'><Link to= '/productos'>Productos</Link></li>
                    <li className='nav_enlace'><Link to= '/nosotros'>Nosotros</Link></li>
                    <div className='carrito'>
                    <CardWidget cantidad = "10"/>  
                    </div>      
                
        </header>
    )
}


/*<a href ='productos'className='nav_enlace'><Link to= '/productos'>Productos</Link></a>
<a href ='nosotros'className='nav_enlace'><Link to= '/nosotros'>Nosotros</Link></a>*/



/*-------Exportaciones-------*/
export default NavBar;