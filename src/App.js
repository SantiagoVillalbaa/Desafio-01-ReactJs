import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemCount from './components/ItemCount/ItemCount';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';



function App() {
  const stock = 10
  return (
    <div className="App">
      <NavBar/>
      
      {/* <ItemListContainer/> */}
      <ItemDetailContainer/>

      <ItemCount stock = {stock}/>
    </div>
  );
}

export default App;
