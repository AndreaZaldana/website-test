import React, { useState, useRef, useEffect } from 'react'
import './About.css'
import { faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons'
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons'
import {SliderData} from './SliderImages';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import icon1 from '../../assets/icons/hogar.png'
import icon2 from '../../assets/icons/carretera.png'
import icon3 from '../../assets/icons/losa.png'
import Counter from '../counter/Counter';
import { useNav } from '../../utilities/useNav';
import { revealOnScroll } from '../../utilities/revealOnScroll';

const About = () => {
  const [current, setCurrent] = useState(0);
  const length = SliderData.length;
  const refCount = useRef(null);
  const aboutRef = useNav('about');
  const infoText =useRef(null);
  const isVisible = revealOnScroll(infoText);
  const [isLoading, setIsLoading] = useState(true);

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
    setIsLoading(true);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
    setIsLoading(true);
  };

  if (!Array.isArray(SliderData) || length <= 0) {
    return null;
  }

  useEffect(() => {
    // Set loading state to true when the component mounts or slide changes
    setIsLoading(true);
  }, [current]);

  return (
    <div className='about-container' id='aboutSection' ref={aboutRef}>
      <div className='about'>
        <div className="about-left">
          <button className='btn' onClick={nextSlide}><FontAwesomeIcon icon={faArrowCircleRight} size='2x' color='white'/></button>
          <button className= 'btn back-btn'onClick={prevSlide}><FontAwesomeIcon icon={faArrowCircleLeft} size='2x' color='white'/></button>
          {isLoading && <div className="spinner"></div>}
          {SliderData.map((slide, index) => {
            return (
            <div
              className={index === current ? 'slide active' : 'slide'}
              key={index}>
              {index === current && (
                <img 
                src={slide.image} 
                alt='travel image' 
                className='image' 
                onLoad={() => setIsLoading(false)}
                />
              )}
            </div>
          );
        })}
          <p>Proyectos y maquinarias</p>
        </div>
        <div className="about-right">
          <h3>SOBRE NOSOTROS</h3>
          <h2>Soluciones de calidad</h2>
          <p>La empresa CRZ, nace durante el período de creciente movimiento en la construcción, motivados
          por contribuir de manera técnica, humana y honesta, al desarrollo del sector construcción y en
          general del país, generando acerca de 300 empleos directos.</p>
          <p>CRZ, una empresa líder con firmes valores de honestidad, transparencia y ética profesional; mismos
          que nos permitirán un crecimiento vertiginoso, hasta lograr el mantenimiento sostenible con
          equidad social en la industria de la construcción.</p>
        </div>
      </div>
      <div className={isVisible ? 'big-text' : 'big-text reveal'} ref={infoText}>
        <p>Más de <span className='highlight'>veinte años</span> de
          experiencia en proyectos realizados en el área de obras civiles, horizontales y verticales.</p>
      </div>
      <div className="counters" ref={refCount}>
        <div className='stat'>
          <img src={icon1} alt="" />
          <Counter value={115} subtitle='Viviendas' countRef={refCount}/>
        </div>
        <div className='stat'>
          <img src={icon2} alt="" />
          <Counter value={579} subtitle='km de carretera' countRef={refCount}/>
        </div>
        <div className='stat'>
          <img src={icon3} alt="" />
          <Counter value={48000} subtitle='m³ de concreto en losas de acabado fino' countRef={refCount}/>
        </div>
      </div>
    </div>
  )
}

export default About