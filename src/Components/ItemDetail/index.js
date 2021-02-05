
import { Row, Col } from 'antd';
import ItemCount from '../ItemCount';
import './style.css';


const ItemDetail =({producto})=>{
    return(
        <>
            <div className="mainItemDetail">
            <Row gutter={[40,16]}>                
                <Col md={12} xs={24}>
                <img src={producto.image} alt={producto.title}/>
                </Col>
                <Col md={12} xs={24} >
                    <div className="detailsContainer">
                        <div className="textLeft">
                        <h1>{producto.title}</h1>
                        <h2>{producto.price}</h2>
                        <p>{producto.description}</p>
                        </div>
                        <ItemCount stock={producto.stock} initial={1}/>
                    </div>
                </Col>
            </Row>
            </div>
        </>
    )
}

export default ItemDetail