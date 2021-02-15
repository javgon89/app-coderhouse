import {Button,Typography} from 'antd';
import{LeftOutlined} from '@ant-design/icons';
import {useHistory} from 'react-router-dom';

const { Title } = Typography;

const Cart =()=>{

    let history = useHistory();

    return(
        <>  
            <Button type="primary" className="mainButton backButton" onClick={() => history.goBack()}><LeftOutlined/>Volver</Button> 
            <div>
                <Title className="customFont"> Estas Viendo tu carrito</Title>               
            </div>    
        </>
    )
}


export default Cart