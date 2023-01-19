/*-----imports-----*/
//Mods
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
//styles
import './index.css';
//comps
import NavBar from './Components/navbar/NavBar.js'
import Home from './Components/home/Home';
import AboutUs from './Components/aboutUs/AboutUs';
import Footer from './Components/footer/footer';
//core
import reportWebVitals from './reportWebVitals';
import ItemListContainer from './Components/itemlistcontainer/ItemListContainer';
import ItemDetailContainer from './Components/itemdetailcontainer/ItemDetailContainer';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <NavBar/>

    <Routes>
      <Route exact path='/' element={<Home/>}/>
      <Route exact path='/productos' element={<ItemListContainer/>}/>
      <Route exact path='/producto/:productoId' element={<ItemDetailContainer/>}/>
      <Route exact path='/categoria/:categoriaId' element={<ItemListContainer/>}/>
      <Route exact path='/nosotros' element={<AboutUs/>}/>
    </Routes>

    <Footer/>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
