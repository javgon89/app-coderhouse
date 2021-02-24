import {CartContext} from '../../Context/CartContext';
import { useContext } from 'react'; 

 const ItemInCart=({e})=>{    
    
    const {costoTotal} = useContext(CartContext) 

    console.log(costoTotal)

 

       return(              
                        
                        <div  className="cartList">                         
                        <img alt={e.productName} src={e.image} className="cartImage"/>
                        <p>Producto: <b>{e.productName}</b></p>   
                        <p>Precio total: <b>$ {costoTotal}</b></p>                        
                        <p>Unidades: <b>{e.cantidad}</b></p>                            
                        <button>Eliminar</button>
                        </div>)
       }
       
  export default ItemInCart     