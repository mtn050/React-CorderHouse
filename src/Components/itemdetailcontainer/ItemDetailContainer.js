import './ItemDetailContainer.css'

import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import ItemDetail from '../itemdetail/ItemDetail'





/*-------Logica-----------*/
const ItemDetailContainer = () =>{//solamente retorna una cosa

  const [producto, set_productos] = useState([])
    const {productoId} = useParams()

    useEffect(()=>{

      fetch(`https://fakestoreapi.com/products/${productoId}`)
      .then(res=>res.json())
      .then(producto=>set_productos(<ItemDetail data = {producto}  />))


    },[productoId]/*cada vez que productoId cambia*/ )
    return(
        <div>
          {producto}
        </div>
    )
}






/*-------Exportaciones-------*/
export default ItemDetailContainer;