import ItemListContainer from '../itemlistcontainer/ItemListContainer';
import './Home.css'






/*-------Logica-----------*/
const Home = () =>{//solamente retorna una cosa
    return(
        <div >
        <h1 className= 'Home'>Home</h1>
        <ItemListContainer/>
        </div>
    )
}






/*-------Exportaciones-------*/
export default Home;