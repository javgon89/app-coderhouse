
import { Row, Col,Button } from 'antd';
import ItemCount from '../ItemCount';
import './style.css';
import {useHistory} from 'react-router-dom'


const ItemDetail =({producto})=>{

    let history = useHistory();

    return(
        <>
            <Button type="primary" className="mainButton" onClick={() => history.goBack()}>Volver</Button>  
            <div className="mainItemDetail">                
            <Row gutter={[40,16]} justify="center">                     
                <Col md={8} xs={24}>                
                <img src={producto.image} alt={producto.title}/>
                </Col>
                <Col md={8} xs={24} >
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