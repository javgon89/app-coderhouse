/*import {useState, useEffect} from 'react';
import {Spin } from 'antd';
import ItemList from '../Components/ItemList';
//import productList from '../sampleItems/productList.js';
import { LoadingOutlined } from '@ant-design/icons';
import {useParams, Link} from 'react-router-dom';
import {getFirestore} from '../firebase'

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />



/*const getProductByCategories = (category) => {
    const products = productList.filter((producto) => {  
      return producto.category === category;  
    }); 
    
    const promesaPrueba = new Promise((resolve, reject) => {  
      setTimeout(() => {  
        resolve(products);  
      }, 1000);  
    });  
    return promesaPrueba;  
  };*/
/*

  const ItemCategoryContainer = () => {
    const [products, setProducts] = useState([]);  
    const [loading, setLoading] = useState(false);  
    const { categoryID } = useParams();  
  
  
    useEffect(() => {  
      const dataBase = getFirestore();
      const productList = dataBase.collection('Productos');
      const categoryFilter = productList.where('categoryName', '==', categoryID)

      setLoading(true);

      categoryFilter.get().then((value)=>{
          let aux = value.docs.map(e => {                
              return {...e.data(), id: e.id}
          })
          setProducts(aux)
          setLoading(false)
          console.log(aux)
          
    /*  getProductByCategories(categoryID).then((res) => {  
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
            <ItemList products={products}/>          
        </>
    )
}

export default ItemCategoryContainer   */