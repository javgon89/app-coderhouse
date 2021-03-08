

import './App.css';
import NavBar from './Components/NavBar';
import 'antd/dist/antd.css';
import ItemDetailContainer from './Containers/ItemDetailContainer';
import ItemListContainer from './Containers/ItemListContainer';
import {BrowserRouter, Route,Switch} from 'react-router-dom'
import Cart from './Components/Cart';
import { CartProvider } from './Context/CartContext';
import Checkout from './Components/Checkout';


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
            <ItemListContainer/> 
            </Route> 
            
            <Route exact path="/product/:productID">  
              <ItemDetailContainer/>   
            </Route>

            <Route exact path="/Cart">  
              <Cart/>
            </Route>

            <Route exact path="/Checkout">  
              <Checkout/>
            </Route>

          </Switch>      
        </BrowserRouter>
      </CartProvider>
    </div>


  );
}

export default App;
