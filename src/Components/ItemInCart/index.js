import {CartContext} from '../../Context/CartContext';
import { useContext } from 'react'; 
import {Button,Row,Col} from 'antd';
import{DeleteOutlined} from '@ant-design/icons'

 const ItemInCart=({e})=>{    
    
    const {costItem,removeItem} = useContext(CartContext) 
    

       return(      
          
         <div  className="cartList">  
            <Row gutter={[16, 16]}>
                  <Col className="gutter-row" md={3}>       
                  <img alt={e.productName} src={e.image} className="cartImage"/>
                  </Col>
                  <Col className="gutter-row" md={12}>    
                  <p>Producto: <b>{e.productName}</b></p>   
                  <p>Precio unitario: <b>{e.price}</b></p>                                           
                  <p>Unidades: <b>{e.cantidad}</b></p> 
                  <p>Id del producto: <b>{e.id}</b></p> 
                  <p>Precio total: <b>$ {costItem(e)}</b></p>  
                  </Col>  
                  <Col className="gutter-row" md={9}>                          
               <Button className="trashButton" onClick={()=> removeItem(e.id)}><DeleteOutlined /> Quitar del carrito</Button>
               </Col> 
            </Row> 
         </div>)
       }
       
  export default ItemInCart     