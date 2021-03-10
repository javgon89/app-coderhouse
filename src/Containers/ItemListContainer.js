import {useState, useEffect,/*useContext*/} from 'react';
import { Typography, Spin } from 'antd';
import ItemList from '../Components/ItemList';
import { LoadingOutlined } from '@ant-design/icons';
import {getFirestore} from '../firebase';
import {useParams} from 'react-router-dom';
//import { ProductContext } from '../Context/productsContext';


const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />

const { Title } = Typography;



const ItemListContainer =({greeting})=>{

    //const {addProducts} = useContext(ProductContext)  

    const [products,setProducts] = useState([]);
    const [loading, setLoading ] = useState(false);
    const { categoryID } = useParams();      

    /*    const dataBase = getFirestore();
        const productList = dataBase.collection('Productos')

        setLoading(true);

        productList.get().then(async (value) => {
            //  Usando Promise.all() para esperar que todos los metodos asincronicos se terminen de ejecutar.
            let aux = await Promise.all(value.docs.map( async (product) => {

                // Llamar otra vez a la bd tomando la categoriaID del element
                const CategoriasCollection = dataBase.collection('Category');

                // Tomamos el documento la id de la categoria
                let auxCategorias = await CategoriasCollection.doc(product.data().categoryId).get()
                console.log(auxCategorias.data())
                return { ...product.data(), id: product.id,category:auxCategorias.data().name }
            }))
            setLoading(false)
            console.log(aux)
            setProducts(aux);
        })

    },[])*/

    useEffect(() => {
        const dataBase = getFirestore();
        let productList;
        setLoading(true);
        if(categoryID){
            productList = dataBase.collection('Productos').where('categoryName', '==', categoryID);
        }else{
            productList = dataBase.collection('Productos');
        }
        productList.get().then(async (value) => {
            if(value.size === 0){
                console.log('No existen resultados');
            }
            let aux = await Promise.all(value.docs.map( async (product) => {              
                const CategoriasCollection = dataBase.collection('Category'); 
                let auxCategorias = await CategoriasCollection.doc(product.data().categoryId).get()               
                return { ...product.data(), id: product.id,categoryName:auxCategorias.data().name }

            }))         
            setLoading(false);
            setProducts(aux);
        });
    }, [categoryID]);

  

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
            {/*<button onClick={()=> addProducts()}>agregar products</button>*/}
            <ItemList products={products} />          
        </>
    )
    }

export default ItemListContainer