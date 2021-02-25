import {CartContext} from '../../Context/CartContext';
import { useContext } from 'react'; 
import {Button} from 'antd';
import{DeleteOutlined} from '@ant-design/icons'

 const ItemInCart=({e})=>{    
    
    const {costItem,removeItem} = useContext(CartContext) 
    

       return(              
                        
                        <div  className="cartList">                         
                        <img alt={e.productName} src={e.image} className="cartImage"/>
                        <p>Producto: <b>{e.productName}</b></p>   
                        <p>Precio total: <b>$ {costItem(e)}</b></p>                        
                        <p>Unidades: <b>{e.cantidad}</b></p>                            
                        <Button className="trashButton" onClick={()=> removeItem(e.id)}><DeleteOutlined /> Quitar del carrito</Button>
                        </div>)
       }
       
  export default ItemInCart     