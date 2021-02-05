import {useState,useEffect} from 'react';
import ItemDetail from '../Components/ItemDetail/index.js';
import ProductList from '../Components/sampleItems/ProductList.js';
import { LoadingOutlined } from '@ant-design/icons';
import {Spin } from 'antd';
import './style.css';

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />

const ItemDetailContainer =()=>{   
    

        const [producto,setProducto] = useState({});
        const [loading, setLoading ] = useState(false);
    
        useEffect (()=>{
            setLoading(true);
            const promesaProducto = new Promise ((resolve,reject)=>{
                setTimeout(()=>{resolve(ProductList[0])
                },2000)
            })        
            promesaProducto.then(
                (res)=>{setProducto(res);console.log(res)
                setLoading(false)
                }, 
                           
            )
    
        },[])


    return(

        <>
            {loading ? (
            <>
                <Spin indicator={antIcon} className='loading' />
                <p>Cargando productos</p>
            </>
            ) : (

            <>
                <ItemDetail producto={producto}/>           
            </>
            )}
        </>
        )
}

export default ItemDetailContainer