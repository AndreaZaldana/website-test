import React, {useRef} from 'react'
import './Values.css'
import project1 from '../../assets/block1.jpg'
import project2 from '../../assets/block2.jpg'
import project3 from '../../assets/block3.jpg'
import project4 from '../../assets/block4.jpg'
import { useNav } from '../../utilities/useNav';
import { revealOnScroll } from '../../utilities/revealOnScroll'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { faEye } from '@fortawesome/free-solid-svg-icons'
import { faMix } from '@fortawesome/free-brands-svg-icons'
import { faTrowelBricks } from '@fortawesome/free-solid-svg-icons'
import { faPersonDigging } from '@fortawesome/free-solid-svg-icons'
import { faRoad } from '@fortawesome/free-solid-svg-icons'

const Values = () => {
  const valuesRef = useNav('values');
  const headliner = useRef(null);
  const isVisible = revealOnScroll(headliner);
  return (
    <div className='values' id='valueSection' ref={valuesRef}>
        <div className="mission">
            <div className="mission-icon">
                <FontAwesomeIcon icon={faPaperPlane} size='4x' color='#1a754b' className='vicon'/>
                <span><i></i></span>
            </div>
            <div className="value-text">
                <h3 className='mission-title'>Misión</h3>
                <p>Ser una empresa líder, que contribuya a la sociedad, basada en la sensibilidad humana, conciencia
                social, ambiental y óptimo uso de los recursos naturales dentro de la máxima productividad de obras
                de construcción que cumpla con la expectativa de los clientes vanguardistas que requieran nuestra
                experiencia en la ejecución de proyectos.</p>
            </div>
        </div>
        <div className={isVisible ? 'headline' : 'headline show'} ref={headliner}>
            <p>Nos especializamos en <span>Diseño de mezclas</span>, <span>construcción de obras grises en
            proyectos de obras civil</span>, <span>construcción de losas sobre el terreno</span> y <span> producción y colocación de concreto hidraulico.</span></p>
        </div>
        <div className="specifics">
            <div className="specifics-box">
                <div className="iconv">
                    <FontAwesomeIcon icon={faMix} size='3x' color='rgba(29, 147, 35, 1)'/>
                    <img src={project4} alt="" className='imgc4'/>
                </div>
                <div className="iconv">
                    <FontAwesomeIcon icon={faRoad} size='3x' color='rgba(29, 147, 35, 1)'/>
                    <img src={project3} alt="" className='imgc3'/>
                </div>
                <div className="iconv">
                    <FontAwesomeIcon icon={faPersonDigging} size='3x' color='rgba(29, 147, 35, 1)'/>
                    <img src={project2} alt="" className='imgc2'/>
                </div>
                <div className="iconv">
                    <FontAwesomeIcon icon={faTrowelBricks} size='3x' color='rgba(29, 147, 35, 1)'/>
                    <img src={project1} alt="" className='imgc1'/>
                </div>
            </div>
            <p></p>
        </div>
        <div className="vision">
            <div className="vision-icon">
                <FontAwesomeIcon icon={faEye} size='4x' color='#1a754b' className='vicon'/>
                <span><i></i></span>
            </div>
            <div className="value-text">
                <h3>Visión</h3>
                <p>Ser una sólida y conveniente solución para la ejecución de obras civiles con la máxima calidad, en el
                menor tiempo posible, al menor costo técnico y económicamente factible, utilizando para ello
                eficientes procesos constructivos, personal de amplia experiencia y aplicación de estándares de calidad
                en cada proceso de ejecución.</p>
            </div>
        </div>
    </div>
  )
}

export default Values