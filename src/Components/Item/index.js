import './style.css'
import { Col } from 'antd';
import {Button} from 'antd';
import {Link} from 'react-router-dom';

const Item =({products})=>{
    

    return(
        <>
            <Col md={6} xs={12}>  
                <div className="productCard">
                    <img className="productsImg" alt={products.title} src={products.image}/>
                    <div className="ProductData"> 
                    <p><b>{products.title}</b><br/>
                        {products.price}<br/>               
                        Unidades disponibles: <b>{products.stock}</b>
                    </p>
                    
                        <Link to={`/product/${products.id}`}>
                            <Button type="primary" className="mainButton">Ver producto</Button>
                        </Link>
                            
                        
                    
                    </div>
                </div>
            </Col>
        </>
    )
}

export default Item