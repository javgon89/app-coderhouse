import React ,{useState} from 'react';
import { Button, Tooltip } from 'antd';
import './style.css';

const ItemCount =({initial,stock}) =>{

    const [counter, setCounter] = useState(initial)

    const sumarProducto=()=>{counter<stock && setCounter(counter+1)}

    const quitarProducto=()=>{counter>initial && setCounter(counter-1)}


    return(
        <>      
            <div className="mainStyle">        
                <p className="counterTitle">Agregar producto al carrito</p>
                <div className="counter">                    
                    <Tooltip title={counter>initial ? "Quitar producto":null}>
                        <Button type="primary" 
                                shape="circle" 
                                onClick={quitarProducto} 
                                className="itemStyle" 
                                style={counter===initial ? {background:"#e4e4e4", border:"#bbbbbb", color:"#bbbbbb"}:{}}
                                >-
                        </Button>
                    </Tooltip>

                    <p className="numberStyle">{counter}</p>   

                    <Tooltip title={counter===stock ? "No hay más unidades disponibles" : "Agregar producto al carrito"}>
                        <Button type="primary" 
                                shape="circle" 
                                onClick={sumarProducto} 
                                className="itemStyle" 
                                style={counter===stock ? {background:"#e4e4e4", border:"#bbbbbb", color:"#bbbbbb"}:{}}>+
                        </Button>
                    </Tooltip>
                </div>
                <p className="avUnits">Unidades disponibles: {stock}</p>
                <Button type="primary" className="mainButton">+ Agregar al carrito</Button>
            </div>
        </>
        )

}

export default ItemCount