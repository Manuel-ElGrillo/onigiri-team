import React, {useState} from 'react'
import "../../components/kohai-form/KohaiForm.css";
import ErrorMsg from '../error-msg/ErrorMsg';
import Success from '../success/Success';

const KohaiForm = () => {

  const [onigiri1, setOnigiri1] = useState("");
  const [onigiri2, setOnigiri2] = useState("");
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [direction, setDirection] = useState("");
  const [errorMsg, setErrorMsg] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (event) => {
      event.preventDefault();

      if([onigiri1, onigiri2, name, phoneNumber, direction].includes("")) {
        setErrorMsg(true);
        return;
      }

      setErrorMsg(false);
      setSuccess(true);
      setOnigiri1("");
      setOnigiri2("");
      setName("");
      setPhoneNumber("");
      setDirection("");

      setTimeout( ()=> {
        setSuccess(false);
      }, 3000);

  }

  return (
    <>

      <div className="container">

        <form action="" 
              className='kohai-form'
              onSubmit={handleSubmit}>

          <label htmlFor="onigiri1">Onigiri 1</label>
          <select name=""
                  value={onigiri1}
                  onChange={(event) => setOnigiri1(event.target.value)}>
            <option value="">-- Seleccione --</option>
            <option value="Yoriichi">Yoriichi</option>
            <option value="Shinobu">Shinobu</option>
            <option value="Tengen">Tengen</option>
            <option value="Mitsuri">Mitsuri</option>
            <option value="Muichiro">Muichiro</option>
            <option value="Kyojuru">Kyojuru</option>
            <option value="Giyu">Giyu</option>
            <option value="Obanai">Obanai</option>
            <option value="Sanemi">Sanemi</option>
            <option value="Gyomei">Gyomei</option>
            <option value="Tanjiro">Tanjiro</option>
            <option value="Inosuke">Inosuke</option>
            <option value="Nezuko">Nezuko</option>
            <option value="Zenitzu">Zenitzu</option>
          </select>

          <label htmlFor="onigiri2">Onigiri 2</label>
          <select name=""
                  value={onigiri2}
                  onChange={(event) => setOnigiri2(event.target.value)}>
            <option value="">-- Seleccione --</option>
            <option value="Yoriichi">Yoriichi</option>
            <option value="Shinobu">Shinobu</option>
            <option value="Tengen">Tengen</option>
            <option value="Mitsuri">Mitsuri</option>
            <option value="Muichiro">Muichiro</option>
            <option value="Kyojuru">Kyojuru</option>
            <option value="Giyu">Giyu</option>
            <option value="Obanai">Obanai</option>
            <option value="Sanemi">Sanemi</option>
            <option value="Gyomei">Gyomei</option>
            <option value="Tanjiro">Tanjiro</option>
            <option value="Inosuke">Inosuke</option>
            <option value="Nezuko">Nezuko</option>
            <option value="Zenitzu">Zenitzu</option>
          </select>

          <label htmlFor="name">Nombre</label>
          <input type="text" 
                 value={name}
                 onChange={(event) => setName(event.target.value)}/>

          <label htmlFor="phone-number">Indique su número de teléfono</label>
          <input type="tel"
                 value={phoneNumber} 
                 onChange={(event) => setPhoneNumber(event.target.value)}/>

          <label htmlFor="direction">Dirección de entrega</label>
          <input type="text" 
                 value={direction}
                 onChange={(event) => setDirection(event.target.value)}/>

          <div>
            <h3>Precio: 10$</h3>
          </div>

          <button type='submit'>¡Dame mi Onigiri!</button>

          {errorMsg && <ErrorMsg msg="Por favor introduzca todos los campos del formulario"/>}

          {success && <Success successMsg="Su pedido será enviado pronto 😁🍙"/>}

        </form>

      </div>

    </>
  )
}

export default KohaiForm