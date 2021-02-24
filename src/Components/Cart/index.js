import {Button,Typography} from 'antd';
import {useContext} from 'react';
import{LeftOutlined} from '@ant-design/icons';
import {useHistory} from 'react-router-dom';
import { CartContext } from '../../Context/CartContext';
import ItemInCart from '../ItemInCart';


const { Title } = Typography;

const Cart =()=>{


    let history = useHistory();
    const {cart} = useContext(CartContext)   
    

    return(
        <>  
            <Button type="primary" className="mainButton backButton" onClick={() => history.goBack()}><LeftOutlined/>Volver</Button> 
            <div>
                <Title className="customFont"> Estas Viendo tu carrito</Title>   
                <p className="totalPrice">Precio total:</p>             
            </div>    
            <div>
            {cart.map(e=> <ItemInCart e={e} key={e.id}/>)          
            }
            </div>
        </>
    )
}


export default Cart