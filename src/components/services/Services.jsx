import React, {useState} from 'react'
import './Services.css'
import service1 from '../../assets/services-img/1.jpeg'
import service2 from '../../assets/services-img/2.jpeg'
import service3 from '../../assets/services-img/3.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPersonDigging } from '@fortawesome/free-solid-svg-icons'
import { faRoad } from '@fortawesome/free-solid-svg-icons'
import { faHouse } from '@fortawesome/free-solid-svg-icons'

const Services = () => {
    const [activeService, setActiveService] = useState(null);

    const expandService = (index) => {
        setActiveService(index === activeService ? null : index);
    }
     
  return (
    <div className='services'>
        <div className={`service ${activeService === 0 ? 'active' : ''}`}
        onClick={() => expandService(0)}>
            <img src={service1} alt="" />
            <div className="icon-service">
                <FontAwesomeIcon icon={faPersonDigging} />
                <p>Proyectos con acabados finos</p>
            </div>
            <div className='sone caption'>
                <div className="box">
                    <div className="icon-c">
                        <div className="iconBox">
                            <FontAwesomeIcon icon={faPersonDigging} size='xl' color='white'/>
                        </div>
                    </div>
                    <div className="content">
                        <h3>Proyectos con acabados finos</h3>
                        <p>El acabado fino entregal produce una
                        superficie lisa con la menor cantidad de poros
                        posibles.
                        </p>
                    </div>
                </div>
            </div>
        </div>
            <div className={`service ${activeService === 1 ? 'active' : ''}`}
            onClick={() => expandService(1)}>
                <img src={service2} alt="" />
                <div className="icon-service">
                    <FontAwesomeIcon icon={faRoad} />
                    <p>Calles de concreto</p>
                </div>
                <div className='stwo caption'>
                    <div className="box">
                        <div className="icon-c">
                            <div className="iconBox">
                                <FontAwesomeIcon icon={faRoad} size='xl'color='white'/>
                            </div>
                        </div>
                    <div className="content">
                        <h3>Calles de concreto</h3>
                        <p>Nuestras calles de concreto aseguran un acabado
                        que permite generar la fricción necesaria entre llantas
                        y pavimentos, facilitando el frendao de los vehículos.
                        </p>
                    </div>
                </div>
                </div>
            </div>
            <div className={`service ${activeService === 2 ? 'active' : ''}`}
            onClick={() => expandService(2)}>
                <img src={service3} alt="" />
                <div className="icon-service">
                    <FontAwesomeIcon icon={faHouse} />
                    <p>Viviendas</p>
                </div>
                <div className='sthree caption'>
                    <div className="box">
                            <div className="icon-c">
                                <div className="iconBox">
                                    <FontAwesomeIcon icon={faHouse} size='xl' color='white'/>
                                </div>
                            </div>
                        <div className="content">
                            <h3>Viviendas</h3>
                            <p>Las viviendas se construyen con el sistema
                            de mapostería reforzada. El proceso resulta 
                            con menor tiempo de ejecución y posibilita un
                            comportamiento estructural más eficiente.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Services