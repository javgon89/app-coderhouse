

import './App.css';
import NavBar from './Components/NavBar';
import 'antd/dist/antd.css';
import ItemDetailContainer from './Containers/ItemDetailContainer';
import ItemListContainer from './Containers/ItemListContainer';
import ItemCategoryContainer from './Containers/ItemCategoryContainer';
import {BrowserRouter, Route,Switch} from 'react-router-dom'


const App=()=> {



  
  return (
    <div className="App">


      <BrowserRouter>
        <NavBar/>      
        <Switch>
          
          <Route exact path="/">   
          <ItemListContainer greeting="Bienvenidos a JavCommerce"/> 
          </Route> 

          <Route exact path="/category/:categoryID">   
          <ItemCategoryContainer greeting="Bienvenidos a Categoría"/> 
          </Route> 
          
          <Route exact path="/product/:productID">  
          <ItemDetailContainer/>   
          </Route>

        </Switch>      
      </BrowserRouter>
      
    </div>


  );
}

export default App;
