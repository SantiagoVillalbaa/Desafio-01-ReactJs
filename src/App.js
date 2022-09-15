import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemCount from './components/ItemCount/ItemCount';
import ItemListContainer from './Pages/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './Pages/ItemDetailContainer/ItemDetailContainer';
import Footer from './components/Footer/Footer';
import {BrowserRouter, Routes, Route} from 'react-router-dom';



function App() {
  /* const stock = 10 */
  return (
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element={<ItemListContainer/>}/>
          <Route path='detalles/:id' element={<ItemDetailContainer/>}/>
          <Route path='category/:categoryName' element= {<ItemListContainer/>}/>
        </Routes> 
      

        {/* <ItemCount stock = {stock}/> */}
        <Footer/>
      </BrowserRouter>
      
  )
}

export default App;
