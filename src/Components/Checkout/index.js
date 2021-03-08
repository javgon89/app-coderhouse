import {useContext} from 'react';
import { CartContext } from '../../Context/CartContext';
import { Form, Input, Button} from 'antd';


const Checkout =()=>{

    const {costoTotal,setName,setMail,setPhone,endPurchase,purchaseDone} = useContext(CartContext)  

    return(
        <div className="margincheckout">
        {purchaseDone === false ? <div>
        <h1>Finalice su compra</h1>    
        <p>Precio final: <b>${costoTotal()}</b></p>
        <Form>
            <Form.Item label="Nombre y apellido" required tooltip="Campo requerido">
            <Input placeholder="Ingrese su nombre y apellido" onChange={(e)=> {setName(e.target.value)}}/>
            </Form.Item>

            <Form.Item label="Mail" required tooltip="Campo requerido"
            >
            <Input placeholder="Ingrese su mail" onChange={(e)=> {setMail(e.target.value)}}/>
            </Form.Item>

            <Form.Item label="Celular" required tooltip="Campo requerido">
            <Input placeholder="Ingrese su celular" onChange={(e)=> {setPhone(e.target.value)}}/>
            </Form.Item>

            <Form.Item>
            <Button type="primary" onClick={()=> {endPurchase()}}>Confirmar compra</Button>
            </Form.Item>
        </Form>
        </div>
         : <div>
             <h1>Felicitaciones su compra ha sido realziada con éxito</h1>
             <p>El código de su operación es:</p>   
            </div> 
             }

        </div>
    )
}

export default Checkout