import './ItemDetail.css'

import ItemCount from '../itemcount/ItemCount'




/*-------Logica-----------*/
const ItemDetail = (props) =>{//solamente retorna una cosa
    const {title,description,category,price} = props.data

    return(
          <div className = "item">
             <p>{title}</p>
             <p>Descripcion:{description}</p>
             <p>Categoria:{category}</p>
             <p>${price}</p>
             <p>Stk: 10 </p>
            <ItemCount stock = "10"/>
        </div>
    )
}






/*-------Exportaciones-------*/
export default ItemDetail;