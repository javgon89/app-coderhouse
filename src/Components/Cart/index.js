import {Button,Typography} from 'antd';
import {useContext} from 'react';
import{LeftOutlined} from '@ant-design/icons';
import {useHistory} from 'react-router-dom';
import { CartContext } from '../../Context/CartContext';


const { Title } = Typography;

const Cart =()=>{


    let history = useHistory();
    const {cart} = useContext(CartContext)
    console.log(cart)

    const eliminarProduct =()=> {
        cart.splice(cart.id===1)
    }

    return(
        <>  
            <Button type="primary" className="mainButton backButton" onClick={() => history.goBack()}><LeftOutlined/>Volver</Button> 
            <div>
                <Title className="customFont"> Estas Viendo tu carrito</Title>               
            </div>    
            <div>
            {cart.map(e=> <div key={e.id}>
                            <p>{e.productName}</p>
                            <p>{e.cantidad}</p>
                            <button onClick={eliminarProduct}>Eliminar</button>
                          </div>)}
            </div>
        </>
    )
}


export default Cart