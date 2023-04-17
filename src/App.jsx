import './App.css';
import ItemListContainer from './components/itemListContainer';
import NavBar from './components/NavBar';

function App() {
  return(
    <>
    <NavBar />
    <ItemListContainer texto='BauerShop' />
    </>
  );
}

export default App;