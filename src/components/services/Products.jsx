import React, {useState} from 'react'
import service1 from '../../assets/services-img/1.jpeg'
import service2 from '../../assets/services-img/2.jpeg'
import service3 from '../../assets/services-img/3.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPersonDigging } from '@fortawesome/free-solid-svg-icons'
import { faRoad } from '@fortawesome/free-solid-svg-icons'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons'
import { useNav } from '../../utilities/useNav';
import { handleClickNav } from '../../utilities/handleClickNav'
import './Products.css'

const Products = () => {
  const serviceRef = useNav('services');
  const [serviceOn, setServiceOn] = useState(null);

  const showContent = (index) => {
    setServiceOn(index === serviceOn ? null : index);
}  
  return (
    <div className='products' id='serviceSection' ref={serviceRef}>
        <div className={serviceOn===0? 'serviceBox item1 on' : 'serviceBox item1'} style={{background: 'linear-gradient(135deg, #6b7b8c 0%, #1a754b 100%)'} } onClick={() => showContent(0)}>
            <div className="serviceImg">
                <img src={service2} alt="" />
                <div className="service-icon" style={{background: serviceOn===0? 'rgba(107, 123, 140, 1)' : 'transparent'}}>
                    <div className="title-product">
                        <h3>Calles de concreto</h3>
                        <FontAwesomeIcon icon={faRoad} className='icon-tag'/>
                    </div>
                    <button className='btn'><FontAwesomeIcon icon={faArrowRightLong} /></button>
                </div>
            </div>
            <div className="serviceContent">
                <h3>Calles de concreto</h3>
                <p>Nuestras calles de concreto aseguran un acabado
                que permite generar la fricción necesaria entre llantas
                y pavimentos, facilitando el frenado de los vehículos.
                </p>
                <button className='btn' onClick={() => handleClickNav('contactSection')}>Obten información</button>
            </div>
        </div>
        <div className={serviceOn===1? 'serviceBox item2 on' : 'serviceBox item2'} style={{background: 'linear-gradient(132deg, #229cad 0%, #1a754b 100%)'}} onClick={() => showContent(1)}>
            <div className="serviceImg">
                <img src={service1} alt="" />
                <div className="service-icon" style={{background: serviceOn===1? 'rgba(34, 173, 154, 1)' : 'transparent'}}>
                    <div className="title-product">
                        <h3>Acabados finos</h3>
                        <FontAwesomeIcon icon={faPersonDigging} className='icon-tag'/>
                    </div>
                    <button className='btn'><FontAwesomeIcon icon={faArrowRightLong} /></button>
                </div>
            </div>
            <div className="serviceContent">
                <h3>Acabados finos</h3>
                <p>Los proyectos con acabado fino integral producen una
                superficie lisa con la menor cantidad de poros
                posibles.
                </p>
                <button className='btn' onClick={() => handleClickNav('contactSection')}>Obten información</button>
            </div>
        </div>
        <div className={serviceOn===2? 'serviceBox item3 on' : 'serviceBox item3'} style={{background: 'linear-gradient(132deg, #11aa45 0%, #1a754b 100%)'}} onClick={() => showContent(2)}>
            <div className="serviceImg">
                <img src={service3} alt="" />
                <div className="service-icon" style={{background: serviceOn===2? 'rgba(29, 147, 35, 1)' : 'transparent'}}>
                    <div className="title-product">
                        <h3>Viviendas</h3>
                        <FontAwesomeIcon icon={faHouse} className='icon-tag'/>
                    </div>
                    <button className='btn'><FontAwesomeIcon icon={faArrowRightLong} /></button>
                </div>
            </div>
            <div className="serviceContent">
                <h3>Viviendas</h3>
                <p>Las viviendas se construyen con el sistema
                de mapostería reforzada. El proceso resulta 
                con menor tiempo de ejecución y posibilita un
                comportamiento estructural más eficiente.
                </p>
                <button className='btn' onClick={() => handleClickNav('contactSection')}>Obten información</button>
            </div>
        </div>
    </div>
  )
}

export default Products