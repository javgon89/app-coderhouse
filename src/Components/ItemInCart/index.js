const ItemCart =({e})=>{    

    return(
       
            <div  className="cartList">
                                <img alt={e.productName} src={e.image} className="cartImage"/>
                                <p>Producto: <b>{e.productName}</b></p>   
                                <p>Precio total: <b>$ {e.price * e.cantidad}</b></p>                        
                                <p>Unidades: <b>{e.cantidad}</b></p>                            
                                <button>Eliminar</button>
            </div>
       
    )
}

export default ItemCart