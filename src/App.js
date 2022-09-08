import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';



function App() {
  const stock = 10
  return (
    <div className="App">
      <NavBar/>
      
      <ItemListContainer/>

      <ItemCount stock = {stock}/>
    </div>
  );
}

export default App;
