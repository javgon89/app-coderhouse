import {CartContext} from '../../Context/CartContext';
import { useContext } from 'react'; 

 const ItemInCart=({e})=>{    
    
    const {costItem,removeItem} = useContext(CartContext) 
    

       return(              
                        
                        <div  className="cartList">                         
                        <img alt={e.productName} src={e.image} className="cartImage"/>
                        <p>Producto: <b>{e.productName}</b></p>   
                        <p>Precio total: <b>$ {costItem(e)}</b></p>                        
                        <p>Unidades: <b>{e.cantidad}</b></p>                            
                        <button onClick={()=> removeItem(e.id)}>Eliminar</button>
                        </div>)
       }
       
  export default ItemInCart     