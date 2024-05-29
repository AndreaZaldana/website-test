import React from 'react'
import './Hero.css'
import { handleClickNav } from '../../utilities/handleClickNav';
import { useNav } from '../../utilities/useNav';

const Hero = () => {
  const heroRef = useNav('home');
  return (
    <div className='hero container' id='heroSection' ref={heroRef}>
        <div className="hero-text">
            <h1><span className='highlight'>C</span>onstruímos tu camino con p<span className='highlight'>r</span>ecisión para que
            condu<span className='highlight'>z</span>cas con seguridad.</h1>
            <p>Nuestro principal objetivo es ser una empresa con sensibilidad humana, aportando elementos
            fundamentales, que brinden soluciones a las diferentes variables que se presentan, teniendo como
            marco la óptica social y la protección al medio ambiente en cada uno de los proyectos a realizar.
            </p>
            <button className='btn' onClick={()=>handleClickNav('aboutSection')}>Descubre más</button>
        </div>
    </div>
  )
}

export default Hero