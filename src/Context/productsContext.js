import {createContext} from 'react';
import {getFirestore} from '../firebase'


export const ProductContext = createContext();
export const ProductProvider =({children}) => {


  
const addProducts =()=>{

  const productList=    
    
    {
     categoryId:"7e4Rhe5zh22gJA78rXyx", 
     title:"Zapatillas DC run",
     price:5000,
     stock:20,
     image:"https://i.ibb.co/7pbyMfw/dc-4.jpg",
     categoryName:"running",
     description:"Las DC running  combinan un look minimalista con un ajuste moderno. El modelo se ha actualizado con una nueva plantilla suave y una suela exterior flexible para ofrecer un mejor contacto con la tabla desde el primer momento."}
   
  
    const dataBase = getFirestore();   
    const orderCollection = dataBase.collection('Productos');
      orderCollection.add(productList)
     
    }




    return(
        <ProductContext.Provider value={{ addProducts  }}>
            {children}
        </ProductContext.Provider>
    )


}