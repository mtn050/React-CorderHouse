//        IMPORTACIONES

// Modulos
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

// Estilos
import "./ItemList.css";

// Componentes
import Item from "../item/Item.js";

//        LOGICA

// Función constructora
const ItemList = () => {
  const [producto, setProductos] = useState([]);

  const { categoriaId } = useParams();

  useEffect(() => {
    if (categoriaId != null) {
      fetch(`https://fakestoreapi.com/products/category/${categoriaId}`)
        .then((res) => res.json())
        .then((json) =>setProductos(json.map((producto) => (<Item data={producto}/>))));
    } else {
      fetch(`https://fakestoreapi.com/products`)
        .then((res) => res.json())
        .then((json) =>setProductos(json.map((producto) => (<Item data={producto}/>))));
    
    }}, [categoriaId]);

  return (
    <div className="contenedor"> 
      
          <button><Link to="/categoria/electronics">electronics</Link></button>
          <button> <Link to="/categoria/jewelery">jewelery</Link></button>
          <button><Link to="/categoria/men's clothing">men's clothing</Link></button>
          <button><Link to="/categoria/women's clothing">women's clothing</Link></button>
            {producto}
    </div>
  );
};

//        EXPORTACIÓN
export default ItemList;