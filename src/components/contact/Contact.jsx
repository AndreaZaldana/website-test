import React, {useState} from 'react'
import axios from 'axios'
import './Contact.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelopeOpenText } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { useNav } from '../../utilities/useNav'

const Contact = () => {

  const [result, setResult] = useState('');
  const contactRef = useNav('contact');

  const validateForm = (formData) =>{
    const name = formData.get('name').trim();
    const phone = formData.get('phone').trim();
    const email = formData.get('email').trim();
    const message = formData.get('message').trim();

    if(!name || !email || !message ){
      setResult('Por favor llenar los campos.');
      return false
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setResult('Please enter a valid email address.');
      return false;
    }

    const maliciousMessage = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi;
    if(maliciousMessage.test(name) || maliciousMessage.test(phone) || maliciousMessage.test(email) || maliciousMessage.test(message)){
      setResult('Contenido malicioso detectado.');
      return false;
    }

    return true;
  }

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult('Enviando....');
    const formData = new FormData(event.target);

    if (!validateForm(formData)) {
      return;
    }

    formData.append('access_key', import.meta.env.VITE_KEY_MAIL);
    console.log(import.meta.env.VITE_KEY_MAIL)

    try {
      const response = await axios.post('https://api.web3forms.com/submit', formData);

      if (response.data.success) {
        setResult('Mensaje enviado!');
        event.target.reset();
      } else {
        console.log('Error', response.data);
        setResult(response.data.message);
      }
    } catch (error) {
      console.error('Error', error);
      setResult('Hubo un problema enviando tu mensaje. Intentalo de nuevo');
    }
  };

  return (
    <div className='contact' id='contactSection' ref={contactRef}>
        <div className="details contact-col">
            <h3>Envíanos un mensaje <FontAwesomeIcon icon={faEnvelopeOpenText} className='mail-icon'/></h3>
            <p> Si tienes alguna pregunta, comentario o deseas ponerte en contacto con
                nuestro equipo para futuros proyectos, no dudes en enviarnos un
                mensaje. Apreciamos cualquier tipo de retroalimentación y sugerencias.   
            </p>
            <ul>
                <li><FontAwesomeIcon icon={faEnvelope} className='info-icon'color='#478156'/>crzf2012@yahoo.com</li>
                <li><FontAwesomeIcon icon={faPhone} className='info-icon' color='#478156'/>2254-3541, 89113178</li>
                <li><FontAwesomeIcon icon={faLocationDot} className='info-icon' color='#478156'/>Km 8½ Carretera sur, del Hotel Ticomo
                300m al sur, Managua, Nicaragua
                </li>
            </ul>

        </div>
        <div className="info contact-col">
            <form onSubmit={onSubmit}>
                <label>Tu nombre</label>
                <input type="text" name='name' placeholder='Ingresa tu nombre' required/>
                <label>Correo electrónico</label>
                <input type="email" name='email' placeholder='Ingresa tu correo' required/>
                <label>Teléfono (Opcional)</label>
                <input type="tel" name='phone' placeholder='Ingresa tu número de teléfono'/>
                <label>Escribe tu mensaje</label>
                <textarea name="message" rows="6" placeholder='Escribe aquí' required></textarea>
                <button type='submit' className='btn'>Enviar </button>
            </form>
            <span>{result}</span>
        </div>
    </div>
  )
}

export default Contact