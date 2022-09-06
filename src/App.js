import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Counter from './components/ItemCount/ItemCount';



function App() {
  const stock = 10
  return (
    <div className="App">
      <NavBar/>
      
      <ItemListContainer greeting={'Aca va mi catalogo y presentacion de la farmacia'}></ItemListContainer>

      <Counter stock = {stock}/>
    </div>
  );
}

export default App;
