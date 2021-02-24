  

 const ItemInCart=({e})=>{    
    
    const totalProduct = e.price * e.cantidad   

       return(              
                        
                        <div  className="cartList">                         
                        <img alt={e.productName} src={e.image} className="cartImage"/>
                        <p>Producto: <b>{e.productName}</b></p>   
                        <p>Precio total: <b>$ {totalProduct}</b></p>                        
                        <p>Unidades: <b>{e.cantidad}</b></p>                            
                        <button>Eliminar</button>
                        </div>)
       }
       
  export default ItemInCart     