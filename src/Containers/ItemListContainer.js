import {useState, useEffect} from 'react';
import { Typography, Spin } from 'antd';
import ItemList from '../Components/ItemList';
//import productList from '../sampleItems/productList.js';
import { LoadingOutlined } from '@ant-design/icons';
import {getFirestore} from '../firebase'


const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />

const { Title } = Typography;



const ItemListContainer =({greeting})=>{


    const [products,setProducts] = useState([]);
    const [loading, setLoading ] = useState(false);



    useEffect (()=>{

        const dataBase = getFirestore();
        const productList = dataBase.collection('Productos')

        setLoading(true);

        productList.get().then((value)=>{
            let aux = value.docs.map(e => {                
            const categoryCollection = dataBase.collection('Category');            
            console.log(e.data().categoryId);

            categoryCollection.doc(e.data().categoryId).get()
            .then(
                value=>{
                    console.log(value.data())                       
                }

            )
               return {...e.data(),id:e.id, category:e.data().categoryId}
            })
            
            setProducts(aux)
            setLoading(false)
            //console.log(aux)
        })


    },[])


    if (loading){
        return (
            <div className="loading">
            <Spin indicator={antIcon}/>
            <p>Cargando productos</p>
            </div>
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