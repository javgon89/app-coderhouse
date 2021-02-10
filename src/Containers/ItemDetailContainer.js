import {useState,useEffect} from 'react';
import ItemDetail from '../Components/ItemDetail/index.js';
import ProductList from '../Components/sampleItems/ProductList.js';
import { LoadingOutlined } from '@ant-design/icons';
import {Spin } from 'antd';
import {useParams} from 'react-router-dom';
import './style.css';

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />

const ItemDetailContainer =()=>{   
    

        const [producto,setProducto] = useState([]);
        const [loading, setLoading ] = useState(false);
        const {productID} = useParams();
    
        useEffect (()=>{

            setLoading(true);
            let productFound= ProductList.filter(producto=> {
                if(producto.id.toString() === productID){
                    return producto
                }
                 else {return null} 
            })
            console.log(productFound)

            const promesaProducto = new Promise ((resolve,reject)=>{
                setTimeout(()=>{resolve(productFound[0])
                },1000)
            })        
            promesaProducto.then(
                (res)=>{setProducto(res);console.log(res)
                setLoading(false)
                }, 
                           
            )
    
        },[productID])


    return(

        <>
            {loading ? (
            <>
                <Spin indicator={antIcon} className='loading' />
                <p>Cargando producto</p>
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