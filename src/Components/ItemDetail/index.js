

import { Row, Col,Button} from 'antd';
import { LeftOutlined } from '@ant-design/icons';
import ItemCount from '../ItemCount';
import './style.css';
import {useHistory} from 'react-router-dom';
import {CartContext} from '../../Context/CartContext';
import { useContext } from 'react';


const ItemDetail =({producto})=>{

    let history = useHistory();
    const {addToCart} = useContext(CartContext)    

    const onAdd =(counter)=>{         
        addToCart({ cantidad:counter,
                      productName:producto.title,
                      id:producto.id,
                      image:producto.image,
                      price:producto.price
                    }                    
        )
          
        }
                        

    return(
        <>
            <Button type="primary" className="mainButton backButton" onClick={() => history.goBack()}><LeftOutlined/>Volver</Button>  
            <div className="mainItemDetail">                
            <Row gutter={[40,16]} justify="center">                     
                <Col md={8} xs={24}>                
                <img src={producto.image} alt={producto.title}/>
                </Col>
                <Col md={8} xs={24} >
                    <div className="detailsContainer">
                        <div className="textLeft">
                        <h1>{producto.title}</h1>
                        <h2>$ {producto.price}</h2>
                        <p>{producto.description}</p>
                        </div>
                        <ItemCount initial={1} stock={producto.stock} onAdd={onAdd}/>
                    </div>
                </Col>
            </Row>
            </div>
        </>
    )
}

export default ItemDetail