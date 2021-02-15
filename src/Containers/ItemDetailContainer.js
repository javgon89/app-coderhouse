import {useState,useEffect} from 'react';
import ItemDetail from '../Components/ItemDetail/index.js';
import ProductList from '../sampleItems/ProductList.js';
import { LoadingOutlined } from '@ant-design/icons';
import {Spin } from 'antd';
import {useParams} from 'react-router-dom';


const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />


const getProductByID =(productoID)=>{

        const foundProduct = ProductList.filter((product)=>
            {
             return   product.id.toString() === productoID             
            }
            
        )
      

        const promesaProducto = new Promise ((resolve,reject)=>{
        setTimeout(()=>{ resolve(foundProduct[0]) },1000)
        }        
        )
        return(promesaProducto)
        
    }

const ItemDetailContainer =()=>{

    const[producto,setProducto] = useState({});
    const [loading,setLoading] = useState(false);
    const {producteID} = useParams();

    useEffect(() => {  
        setLoading(true);  
        getProductByID(producteID).then((res) => {  
          setProducto(res);  
          setLoading(false);  
        });  
      }, [producteID]);


    return(

        <>
            {loading ? (
             <div className="loading">
                <Spin indicator={antIcon}/>
                <p>Cargando producto</p>
            </div>
            ) : (

            <>
                <ItemDetail producto={producto}/>           
            </>
            )}
        </>
        )
}

export default ItemDetailContainer