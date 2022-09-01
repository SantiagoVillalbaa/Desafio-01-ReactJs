import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';



function App() {
  return (
    <div className="App">
      <NavBar/>
      
      <ItemListContainer greeting={'Aca va mi catalogo y presentacion de la farmacia'}></ItemListContainer>
    </div>
  );
}

export default App;
