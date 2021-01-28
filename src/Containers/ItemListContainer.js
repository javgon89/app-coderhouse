import { Typography } from 'antd';
import ItemCount from '../Components/ItemCount';
import './style.css'


const { Title } = Typography;

const ItemListContainer =({greeting})=>{

    return(
        <>
            <Title className='customFont'>{greeting}</Title>
            <ItemCount initial={1} stock={5}/>
        </>
    )

}

export default ItemListContainer