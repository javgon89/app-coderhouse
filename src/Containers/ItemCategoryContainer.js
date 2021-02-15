import {useState, useEffect} from 'react';
import {Spin } from 'antd';
import ItemList from '../Components/ItemList';
import ProductList from '../sampleItems/ProductList.js';
import { LoadingOutlined } from '@ant-design/icons';
import {useParams, Link} from 'react-router-dom'

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />



const getProductByCategories = (tuvieja) => {
    const products = ProductList.filter((producto) => {  
      return producto.category === tuvieja;  
    }); 
    
    const promesaPrueba = new Promise((resolve, reject) => {  
      setTimeout(() => {  
        resolve(products);  
      }, 1000);  
    });  
    return promesaPrueba;  
  };


  const ItemCategoryContainer = () => {
    const [products, setProducts] = useState([]);  
    const [loading, setLoading] = useState(false);  
    const { categoryID } = useParams();  
  
  
    useEffect(() => {  
      setLoading(true);  
      getProductByCategories(categoryID).then((res) => {  
        setProducts(res);  
        setLoading(false);  
      });  
    }, [categoryID]);


    if (loading){
        return (
            <div className=" loading">
            <Spin indicator={antIcon}/>
            <p>Cargando categoría</p>
            </div>
            )        
    } 

    return(
        <>  
            
            <p className="mainMargin App">Estas viendo la categoría: <b>{categoryID.toUpperCase()}</b> / <Link to={"/"}> Volver al home </Link></p>           
            <ItemList products={products} />          
        </>
    )
}

export default ItemCategoryContainer