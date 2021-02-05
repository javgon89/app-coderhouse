import {useState, useEffect} from 'react';
import { Typography, Spin } from 'antd';
import ItemCount from '../Components/ItemCount';
import ItemList from '../Components/ItemList';
import ProductList from '../Components/sampleItems/ProductList.js';
import './style.css'
import { LoadingOutlined } from '@ant-design/icons';

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />

const { Title } = Typography;



const ItemListContainer =({greeting})=>{

    const [products,setProducts] = useState([]);
    const [loading, setLoading ] = useState(false);

    useEffect (()=>{
        setLoading(true);
        const promesaPrueba = new Promise ((resolve,reject)=>{
            setTimeout(()=>{resolve(ProductList)
            },2000)
        })        
        promesaPrueba.then(
            (res)=>{setProducts(res);
            setLoading(false)
            }, 
                       
        )

    },[])

            
    if (loading){
        return (
            <>
            <Spin indicator={antIcon} className="loading"/>
            <p>Cargando productos</p>
            </>
            )
        
    } 

    return(
        <>
            <Title className="customFont">{greeting}</Title>
            <ItemCount initial={1} stock={5} />
            <ItemList products={products} />          
        </>
    )

}

export default ItemListContainer