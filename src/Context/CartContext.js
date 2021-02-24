import {createContext,useState} from 'react';

export const CartContext = createContext();

export const CartProvider =({children}) => {

    const [cart,setCart] = useState([]);
    

    const addToCart = itemCount => {
        if (cart.find(item => item.id === itemCount.id)) {
          const newCartItem = cart.map(item => {
            if (item.id === itemCount.id) {
              return { ...item, cantidad: itemCount.cantidad + item.cantidad };
             
            } console.log(item.id)
            return item;
          });
          setCart(newCartItem);
        } else {
            setCart(state => {
            return [...state, itemCount];
          });
        }
      };
 
    const totalProduct = e => e.price * e.cantidad 
      



    return(
        <CartContext.Provider value={{cart,addToCart,totalProduct}}>
            {children}
        </CartContext.Provider>
    )


}