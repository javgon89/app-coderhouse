import {Button,Typography} from 'antd';
import {useContext} from 'react';
import{LeftOutlined,ClearOutlined} from '@ant-design/icons';
import {useHistory} from 'react-router-dom';
import { CartContext } from '../../Context/CartContext';
import ItemInCart from '../ItemInCart';


const { Title } = Typography;

const Cart =()=>{


    let history = useHistory();
    const {cart,costoTotal,clearCart} = useContext(CartContext)       

    return(
        <>  
            <Button type="primary" className="mainButton backButton" onClick={() => history.goBack()}><LeftOutlined/>Volver</Button> 
            <div>
                <Title className="customFont"> Estas Viendo tu carrito</Title>   
                <Button className="clearButton" onClick={()=> clearCart()}><ClearOutlined /> Limpiar carrito</Button>
                <p className="totalPrice">Precio total: <b>${costoTotal()}</b></p>             
            </div>    
            <div>
            {cart.map(e=> <ItemInCart e={e} key={e.id}/>)          
            }
            </div>
        </>
    )
}


export default Cart