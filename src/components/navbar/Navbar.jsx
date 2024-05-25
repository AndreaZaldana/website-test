import React, { useState, useEffect, useContext } from 'react'
import { NavContext } from '../../utilities/NavContext';
import './Navbar.css'
import logo from '../../assets/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faSquareXmark } from '@fortawesome/free-solid-svg-icons';
import { handleClickNav } from '../../utilities/handleClickNav';


const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [menu, setMenu] = useState(false);
  const { activeLinkId } = useContext(NavContext);
  

  useEffect(() =>{
    window.addEventListener('scroll', ()=>{
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    })
  }, []);
  
  return (
    <nav className={sticky? 'container solid-nav' : 'container'}>
        <img src={logo} alt="" className={sticky ? 'logo-sticky': 'logo'}/>
        <ul className={menu? '' : 'hide-menu'}>
            <li className={activeLinkId === 'home'? 'activeon section-link': 'section-link'} onClick={()=>handleClickNav('heroSection')}>Inicio</li>
            <li className={activeLinkId === 'about'? 'activeon section-link': 'section-link'} onClick={()=>handleClickNav('aboutSection')}>Nosotros</li>
            <li className={activeLinkId === 'values'? 'activeon section-link': 'section-link'} onClick={()=>handleClickNav('valueSection')}>Valores</li>
            <li className={activeLinkId === 'services'? 'activeon section-link': 'section-link'} onClick={()=>handleClickNav('serviceSection')}>Servicios</li>
            <li className={activeLinkId === 'projects'? 'activeon section-link': 'section-link'} onClick={()=>handleClickNav('projectSection')}>Proyectos</li>
            <li className={activeLinkId === 'contact'? 'selected btn': 'btn'} onClick={()=>handleClickNav('contactSection')}>Contáctanos</li>
        </ul>
        <FontAwesomeIcon icon={menu? faSquareXmark : faBars} color='white' size='xl' className='menu-icon' onClick={() => setMenu(!menu)}/>
    </nav>
  )
}

export default Navbar