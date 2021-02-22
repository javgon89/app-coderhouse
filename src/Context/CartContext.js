import {createContext,useState} from 'react';

export const CartContext = createContext();

export const CartProvider =({children}) => {

    const [cart,setCart] = useState([]);

    const addToCart =(product)=> {
        
            setCart(product)
        }
   

    /*const addToCart =(product)=> {
        if(isInCart(product.producto.id)===-1){
            setCart(product)
        }
        else{
            console.log("va a dar error")
        }        
    }    

    const isInCart =(id)=>{
        return cart.findIndex(prod=> prod.id===id);        
    }*/

   




    return(
        <CartContext.Provider value={{cart,addToCart,setCart}}>
            {children}
        </CartContext.Provider>
    )


}