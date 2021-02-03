
import './App.css';
import NavBar from './Components/NavBar';
import 'antd/dist/antd.css';
import ItemListContainer from './Containers/ItemListContainer';


const App=()=> {

 
  
  return (
    <div className="App">
      
      <NavBar/>
      <ItemListContainer greeting="Bienvenidos a JavCommerce"/>        
       
    </div>
  );
}

export default App;
