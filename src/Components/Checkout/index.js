import { useContext, useState } from 'react';
import { CartContext } from '../../Context/CartContext';
import { Form, Input, Button } from 'antd';
import { getFirestore } from '../../firebase';
import { Link } from 'react-router-dom'

const Checkout = () => {

  const [name, setName] = useState('');
  const [mail, setMail] = useState('');
  const [mailValidate, setMailValidate] = useState('');
  const [phone, setPhone] = useState('');
  const [ordenId, setordenId] = useState('');
  const [errormessage, setErrormessage] = useState(false);
  const [purchaseDone, setPurchaseDone] = useState(false)

  const mailRules = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
  const isValidMail = mailRules.test(mail)

  const mailValidation = mail === mailValidate
  const shortName = name.length > 6
  const shortPhone = phone.length > 6

  const endPurchase = () => {
    if (shortName && shortPhone && mailValidation && isValidMail) {
      console.log('Compra finalizada')
      const purchaseData = { items: { ...cart }, total: costoTotal(), buyer: { name: name, mail: mail, phone: phone } }
      const dataBase = getFirestore();
      const orderCollection = dataBase.collection('Orders');
      orderCollection.add(purchaseData).then((value) => {
        console.log(value.id)
        setPurchaseDone(true)
        setordenId(value.id)
        clearCart()
      });
      console.log(purchaseData)
    }
    else {
      setErrormessage(true)
    }
  }

  const { cart, costoTotal, clearCart } = useContext(CartContext)

  return (
    <div className="margincheckout">
      {purchaseDone === false ? <div>
        <h1>Finalice su compra</h1>
        <h2>Sus productos:</h2>
        {cart.map(e => <div key={e.id}>
          <p>Producto: <b>{e.productName}</b>, Cantidad: <b>{e.cantidad}</b></p>
        </div>)}
        <p>Precio final total: <b>${costoTotal()}</b></p>
        <h2>Complete sus datos:</h2>
        <Form>
          <Form.Item label="Nombre y apellido" required tooltip="Campo requerido">
            <Input placeholder="Ingrese su nombre y apellido" onChange={(e) => { setName(e.target.value) }} />
            {shortName === false && errormessage ? <p className="errorMessage">El nombre y apellido debe tener un mínimo de 6 caracteres</p> : ""}
          </Form.Item>

          <Form.Item label="Email" required tooltip="Campo requerido">
            <Input type="email" placeholder="Ingrese su mail" onChange={(e) => { setMail(e.target.value) }} />
            {isValidMail === false && errormessage ? <p className="errorMessage">No es un correo válido</p> : ""}
          </Form.Item>

          <Form.Item label="Conmfirmar Email" required tooltip="Campo requerido">
            <Input type="email" placeholder="Ingrese su mail nuevamente" onChange={(e) => { setMailValidate(e.target.value) }} />
            {mailValidation === false && errormessage ? <p className="errorMessage">Los email no coinciden</p> : ""}
          </Form.Item>

          <Form.Item label="Celular" required tooltip="Campo requerido">
            <Input type="number" placeholder="Ingrese su celular" onChange={(e) => { setPhone(e.target.value) }} />
            {shortPhone === false && errormessage ? <p className="errorMessage">Mínimo de 6 caracteres</p> : ""}
          </Form.Item>
          {cart.length === 0 ? <p>Error! no hay productos en el carrito</p> :
            <Form.Item>
              <Button type="primary" onClick={() => { endPurchase() }}>Confirmar compra</Button>
            </Form.Item>}
        </Form>
      </div>
        : <div>
            <h1>¡Felicitaciones! su compra ha sido realizada con éxito</h1>
            <p><b>{name}</b> Gracias por su compra. Enviaremos un mail a <b>{mail}</b> con todos los detalles de compra y envío.</p>
            <p>El código de su operación es: <b>{ordenId}</b></p>
            <Link to={'/'}>
              <Button type="primary">Ir al home</Button>
            </Link>
          </div>
      }
    </div>
  )
}
export default Checkout