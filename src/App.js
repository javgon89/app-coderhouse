

import './App.css';
import NavBar from './Components/NavBar';
import 'antd/dist/antd.css';
import ItemDetailContainer from './Containers/ItemDetailContainer';
//import ItemListContainer from './Containers/ItemListContainer';


const App=()=> {



  
  return (
    <div className="App">


      
      <NavBar/>
      <ItemDetailContainer/>
      {/*
      <ItemListContainer greeting="Bienvenidos a JavCommerce"/>        
      */}
    </div>


  );
}

export default App;
