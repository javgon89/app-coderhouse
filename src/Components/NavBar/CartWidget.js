import {ShoppingCartOutlined} from '@ant-design/icons';
import{Dropdown,Menu,Button,Row, Col} from 'antd';
import {useContext} from 'react';
import {CartContext} from '../../Context/CartContext';
import{Link} from 'react-router-dom'






const CartWidget =()=>{

    const {cart,costoTotal,costItem,cantidadProducts} = useContext(CartContext) 

    const menu=(
        <Menu>
        {cart.length===0 ? <div className="emptyCartWidget">No hay elementos en el carrito</div> :  
        <>  
        <Menu.Item >        
            {cart.map(e=>                
                    <div e={e} key={e.id} className="itemInWidwet">                        
                        <Row gutter={[16, 16]}>
                        <Col className="gutter-row" md={12}>
                            <img src={e.image} alt={e.productName} className="cartImageWidget"/>
                        </Col>
                        <Col className="gutter-row" md={12}>
                            <p className="textCartWidget"><b>{e.productName}</b></p>                                                 
                            <p className="textCartWidget">Unidades: <b>{e.cantidad}</b></p>   
                            <p className="textCartWidget">Precio: <b>${costItem(e)}</b></p> 
                        </Col>
                        </Row>   
                    </div>
                       )}
                
        </Menu.Item> 
        <div>      
        <p className="textCentered">Precio total: <b>${costoTotal()}</b></p>
                <Link to={'/cart'}>
                <Button className="widgetCartButton">Ir al carrito</Button>
                </Link>
        </div> 
        </>
        }
    </Menu>)

    return(
        <Dropdown overlay={menu}>
            <Link to={'/cart'}>
           {cantidadProducts===0 ? <span style={{display: "none"}}></span>: <span className="cantidadProducts">{cantidadProducts}</span>}<ShoppingCartOutlined className="customIcon ant-dropdown-link" onClick={e => e.preventDefault()} />
            </Link>      
        </Dropdown>
       
    )
}

export default CartWidget