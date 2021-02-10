import {useState, useEffect} from 'react';
import {Spin } from 'antd';
import ItemList from '../Components/ItemList';
import ProductList from '../Components/sampleItems/ProductList.js';
import './style.css'
import { LoadingOutlined } from '@ant-design/icons';
import {useParams, Link} from 'react-router-dom'

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />



const ItemCategoryContainer =()=>{


    const [products,setProducts] = useState([]);
    const [loading, setLoading ] = useState(false);
    const {categoryID} = useParams();

    useEffect (()=>{
        setLoading(true);
        
        let products = ProductList.filter(producto=>{
            if(producto.category.toString() === categoryID){
                    return producto
                }
            else {return null}       
 
        }) 
       
        
        const promesaPrueba = new Promise ((resolve,reject)=>{
            setTimeout(()=>{resolve(products)
            },1000)
        })        
        promesaPrueba.then(
            (res)=>{setProducts(res);
            setLoading(false)
            }, 
                       
        );
        
 

    },[categoryID])


    if (loading){
        return (
            <>
            <Spin indicator={antIcon} className="loading"/>
            <p>Cargando categoría</p>
            </>
            )
        
    } 

    return(
        <>  
            <p>{products.price}</p>
            <p>Estas viendo la categoría: <b>{categoryID.toUpperCase()}</b> / <Link to={"/"}> Volver al home </Link></p>           
            <ItemList products={products} />          
        </>
    )

}

export default ItemCategoryContainer