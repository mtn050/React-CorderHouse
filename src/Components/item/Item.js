//estilos
import './Item.css'
//componenetes
import ItemCount from '../itemcount/ItemCount';
import { Link } from 'react-router-dom';





/*-------Logica-----------*/
const Item = (props) =>{
const {title,description,category,price,id} = props.data
   
    return(
        <div className = "item">
             <p>{title}</p>
             <p>Descripcion:{description}</p>
             <p>Categoria:{category}</p>
             <p>${price}</p>
             <p>Stk: 10 </p>
             <Link to={`/producto/${id}`}>Detalles</Link>
            <ItemCount stock = "10"/>
        </div>
    )
}






/*-------Exportaciones-------*/
export default Item;