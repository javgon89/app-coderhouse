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
            console.log(aux)
            setProducts(aux);
        })


    },[])
/*
useEffect(() => {
        // conexion a la bd
        const baseDeDatos = getFirestore();

        // Guardamos la referencia de la coleccion que queremos tomar
        const itemCollection = baseDeDatos.collection('Items');

        // Tomando los datos
        itemCollection.get().then(async (value) => {
            //  Usando Promise.all() para esperar que todos los metodos asincronicos se terminen de ejecutar.
            let aux = await Promise.all(value.docs.map( async (product) => {

                // Llamar otra vez a la bd tomando la categoriaID del element
                const CategoriasCollection = baseDeDatos.collection('Categorias');

                // Tomamos el documento la id de la categoria
                let auxCategorias = await CategoriasCollection.doc(product.data().categoryID).get()
                return { ...product.data(), categoria:auxCategorias.data().nombre }
            }))
            console.log(aux)
            setProductos(aux);
        })
    }, [])
*/

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