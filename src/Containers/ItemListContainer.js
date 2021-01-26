import { Typography } from 'antd';
import './style.css'


const { Title } = Typography;

const ItemListContainer =({greeting})=>{

    return(
        <Title className='customFont'>{greeting}</Title>
    )

}

export default ItemListContainer