import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './Pages/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './Pages/ItemDetailContainer/ItemDetailContainer';
import Footer from './components/Footer/Footer';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {CartProvider} from './context/cartProvider'



function App() {
  return (
        <CartProvider>
            <BrowserRouter>
              <NavBar/>
                <Routes>
                  <Route path='/' element={<ItemListContainer/>}/>
                  <Route path='detalles/:id' element={<ItemDetailContainer/>}/>
                  <Route path='category/:categoryName' element= {<ItemListContainer/>}/>
                </Routes> 
              <Footer/>
          </BrowserRouter>
        </CartProvider>
      
  )
}

export default App;
