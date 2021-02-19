

import './App.css';
import NavBar from './Components/NavBar';
import 'antd/dist/antd.css';
import ItemDetailContainer from './Containers/ItemDetailContainer';
import ItemListContainer from './Containers/ItemListContainer';
import ItemCategoryContainer from './Containers/ItemCategoryContainer';
import {BrowserRouter, Route,Switch} from 'react-router-dom'
import Cart from './Components/Cart';
import { CartProvider } from './Context/CartContext';


const App=()=> {
  
  return (

    <div >
      <CartProvider>
        <BrowserRouter>
          <NavBar/>      
          <Switch>
            
            <Route exact path="/">   
              <ItemListContainer  greeting="Bienvenidos a JavCommerce"/> 
            </Route> 

            <Route exact path="/category/:categoryID">   
            <ItemCategoryContainer greeting="Bienvenidos a Categoría"/> 
            </Route> 
            
            <Route exact path="/product/:producteID">  
              <ItemDetailContainer/>   
            </Route>

            <Route exact path="/Cart">  
              <Cart/>
            </Route>

          </Switch>      
        </BrowserRouter>
      </CartProvider>
    </div>


  );
}

export default App;
