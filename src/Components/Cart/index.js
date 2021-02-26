import {Button,Typography} from 'antd';
import {useContext} from 'react';
import{LeftOutlined,ClearOutlined} from '@ant-design/icons';
import {useHistory} from 'react-router-dom';
import { CartContext } from '../../Context/CartContext';
import ItemInCart from '../ItemInCart';
import {Link} from 'react-router-dom';

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
            </div>    {
            
            <div>
                {cart.length ===0 ? <div className="emptyCart">
                                    No hay elementos en el carrito<br/>
                                    <Link to={'/'}>
                                    <Button className="mainButton">Ir a la tienda</Button>
                                    </Link>
                                    </div>

                              : cart.map(e=> <ItemInCart e={e} key={e.id}/>)}          
            </div>
            }
        </>
    )
}


export default Cart