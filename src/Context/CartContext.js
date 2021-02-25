import {createContext,useState} from 'react';

export const CartContext = createContext();

export const CartProvider =({children}) => {

    const [cart,setCart] = useState([]);
    

    const addToCart = itemCount => {
        if (cart.find(item => item.id === itemCount.id)) {
          const newCartItem = cart.map(item => {
            if (item.id === itemCount.id) {
              return { ...item, cantidad: itemCount.cantidad + item.cantidad };
             
            }
            return item;
          });
          setCart(newCartItem);
        } else {
            setCart(state => {
            return [...state, itemCount];
          });
        }
      };

 
      const costoTotal = () => {           
        const cost = cart.reduce((acumulador,item) =>acumulador + item.price * item.cantidad,0)
        return cost;  
      }

      const costItem =(item)=> item.price * item.cantidad;

      const clearCart=()=>{        
             setCart([])        
      }

      
      const removeItem =(id)=>{                     
        const remove = cart.filter(item => item.id !== id);
        setCart(remove)         
      }
  


    return(
        <CartContext.Provider value={{cart,
                                      addToCart,
                                      costoTotal,
                                      costItem,
                                      removeItem,
                                      clearCart}}>
            {children}
        </CartContext.Provider>
    )


}