import {useState,useEffect} from 'react';
import ItemDetail from '../Components/ItemDetail/index.js';
//import productList from '../sampleItems/productList.js';
import { LoadingOutlined } from '@ant-design/icons';
import {Spin } from 'antd';
import {useParams} from 'react-router-dom';
import {getFirestore} from '../firebase'


const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />



const ItemDetailContainer =()=>{

    const[producto,setProducto] = useState({});
    const [loading,setLoading] = useState(false);
    const {productID} = useParams();

    useEffect(() => {  
        setLoading(true);  
        const dataBase = getFirestore();
        const productList = dataBase.collection('Productos');     
        const producto = productList.doc(productID);

        producto.get().then((value)=>{
            let aux = value.data();            
            setProducto(aux);            
            setLoading(false);             
            })            
            

      }, [productID]);


    return(

        <>
            {loading ? (
             <div className="loading">
                <Spin indicator={antIcon}/>
                <p>Cargando producto</p>
            </div>
            ) : (

            <>
                <ItemDetail producto={producto} id={productID}/>           
            </>
            )}
        </>
        )
}

export default ItemDetailContainer