import React, { useState, useEffect } from 'react';
import './Projects.css';
import project1_img from '../../assets/projects-gallery/mulukuku.jpeg'
import project2_img from '../../assets/projects-gallery/bluefields.jpg'
import project3_img from '../../assets/projects-gallery/sanjuanair.jpg'
import project4_img from '../../assets/projects-gallery/chinandega.jpeg'
import project5_img from '../../assets/projects-gallery/malacatoya.jpg'
import project6_img from '../../assets/projects-gallery/puertocorinto.jpeg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { useNav } from '../../utilities/useNav';

const projectsData = [
  { id: 1, imageUrl: project1_img, title: ' Mulukuku-Siuna', description: 'Losas de concreto hidráulico para calles. Espesor de losa de 18 cm, acabado texturizado, sello de juntas de control con material elastómero. ' },
  { id: 2, imageUrl: project2_img, title: 'Naciones Unidas, Bluefields', description: 'Losas de concreto hidráulico para calles. Espesor de losa de 18 cm, acabado texturizado, sello de juntas de control con material elastómero.' },
  { id: 3, imageUrl: project3_img, title: 'Aeródromo San Juan de Nicaragua', description: 'Losas de concreto hidráulico para pista de aterrizaje. Espesor de losa de 14 cm, con malla de acero de 8 mm. Acabado texturizado, sello de juntas de control con material elastómero.' },
  { id: 4, imageUrl: project4_img, title: 'Guasaule, Chinandega', description: 'Losas de concreto hidráulico para calles. Espesor de losa de 18 cm, acabado texturizado, sello de juntas de control con material elastómero.' },
  { id: 5, imageUrl: project5_img, title: 'Malacatoya-El Palo-El Papayal', description: 'Losas de concreto hidráulico para calles. Espesor de losa de 18 cm, acabado texturizado, sello de juntas de control con material elastómero.' },
  { id: 6, imageUrl: project6_img, title: 'Galeria y SILOS en terminal granelera Puerto Corinto', description: 'Construcción de galeria y silos, en proyecto \'Reforzamiento de terminal y patios, APC, Construcción de terminal granelera y terminal de cruceros, Puerto Corinto, Chinandega\'.' },
];

const Projects = () => {
    const projectsRef = useNav('projects');
    const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
    const [isLoading, setIsLoading] = useState(true);

    const preloadImage = (src) => {
      const img = new Image();
      img.src = src;
      img.onload = () => setIsLoading(false);
    };

    useEffect(() => {
      if(projectsData[currentProjectIndex]){
        setIsLoading(true);
        preloadImage(projectsData[currentProjectIndex].imageUrl)
      }
    }, [currentProjectIndex, projectsData])

    const handleNextProject = () => {
        setCurrentProjectIndex(currentProjectIndex === projectsData.length - 1 ? 0 : currentProjectIndex + 1);
    };

    const handlePrevProject = () => {
      setCurrentProjectIndex(currentProjectIndex === 0 ? projectsData.length - 1 : currentProjectIndex - 1);
  };

  return (
    <div className="projects" id='projectSection' ref={projectsRef}>
      {isLoading && <div className="spinner"></div>}
      <div
        className="project-image-container"
        style={{ backgroundImage: `url(${projectsData[currentProjectIndex].imageUrl})` }}>
        <div className='caption-project'>
          <h3>{projectsData[currentProjectIndex].title}</h3>
          <p className='info1 info-project'>{projectsData[currentProjectIndex].description}</p>
        </div>
        <button className="btn prev" onClick={handlePrevProject}>
          <FontAwesomeIcon icon={faChevronLeft} color='white' />
        </button>
        <button className="btn next" onClick={handleNextProject}>
          <FontAwesomeIcon icon={faChevronRight} color='white'/>
        </button>
      </div>
      <div className="thumbnails">
        {projectsData.map((project, index) => (
          <img
            key={project.id}
            src={project.imageUrl}
            alt={`Thumbnail ${index + 1}`}
            className={index === currentProjectIndex ? 'thumbnail selected' : 'thumbnail'}
            onClick={() => setCurrentProjectIndex(index)}
          />
        ))}
      </div>
      <div className="points">
        <div className='caption-project'>
            <p className='info-project'>{projectsData[currentProjectIndex].description}</p>
        </div>
        <div className="points-container">
          {projectsData.map((project, index) => (
            <div 
            key={project.id}
            className={index === currentProjectIndex ? 'point selected' : 'point'}
            onClick={() => setCurrentProjectIndex(index)}
            >
            </div>
          ))}
        </div>
      </div>
    </div>
  );
  };

export default Projects;
