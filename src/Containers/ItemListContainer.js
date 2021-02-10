import {useState, useEffect} from 'react';
import { Typography, Spin } from 'antd';
import ItemList from '../Components/ItemList';
import ProductList from '../Components/sampleItems/ProductList.js';
import './style.css'
import { LoadingOutlined } from '@ant-design/icons';
//import {useParams} from 'react-router-dom'

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />

const { Title } = Typography;



const ItemListContainer =({greeting})=>{


    const [products,setProducts] = useState([]);
    const [loading, setLoading ] = useState(false);
   // const {categoryID} = useParams();

    useEffect (()=>{
        setLoading(true);
        const promesaPrueba = new Promise ((resolve,reject)=>{
            setTimeout(()=>{resolve(ProductList)
            },1000)
        })        
        promesaPrueba.then(
            (res)=>{setProducts(res);
            setLoading(false)
            }, 
                       
        );
      /*  let showProducts = ProductList.filter(producto=>{
            if(producto.category.toString() === categoryID){
                    return producto
                }
            else {return null}       
 
        }) 
        console.log(showProducts)
        return showProducts
*/
    },[/*categoryID*/])


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
            <ItemList products={products} />          
        </>
    )

}

export default ItemListContainer