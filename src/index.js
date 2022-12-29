/*-----imports-----*/
//Mods
import React from 'react';
import ReactDOM from 'react-dom/client';
//styles
import './index.css';
//comps
//import App from './App';
import NavBar from './Components/navbar/NavBar.js'
//core
import reportWebVitals from './reportWebVitals';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import Footer from './Components/footer/footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NavBar/>
    <ItemListContainer/>
    <Footer/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
