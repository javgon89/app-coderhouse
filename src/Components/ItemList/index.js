import Item from "../Item"
import { Row} from 'antd';
import './style.css'

const ItemList =({products})=>{

        
return(
        <>
            <div>
                <Row gutter={[40, 24]} className="marginList">
                    
                    {products.map(products=><Item key={products.id} products={products}/>)}
                
                </Row>
            </div>  
               
        </>
    )
}

export default ItemList