import './style.css'
import { Col } from 'antd';
import {Button} from 'antd';

const Item =({products})=>{
    

    return(
        <>
            <Col md={6} xs={12}>  
                <div className="productCard">
                    <img className="productsImg" alt={products.title} src={products.image}/>
                    <div className="ProductData"> 
                    <p><b>{products.title}</b><br/>
                        {products.price}<br/>               
                        Unidades disponibles:<b>{products.stock}</b>
                    </p>
                    <Button type="primary" className="mainButton">Ver producto</Button>
                    </div>
                </div>
            </Col>
        </>
    )
}

export default Item