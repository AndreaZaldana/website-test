import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons'
import './Download.css'

const Download = () => {
  return (
    <div className='dwnl-section'>
        <div className='title-download'>
            <p>¿Quieres más información acerca de nuestro trabajo?</p>
            <h2>Descarga el pdf</h2>
        </div>
        <div className="download">
            <button className='dark-btn btn' onClick={()=>window.open('https://drive.google.com/file/d/1BdC4oA2bgoQpxNGvrvaV7fYwUJCH0dIx/view?usp=drive_link')}>Descargar <FontAwesomeIcon icon={faDownload}/></button>
        </div>
    </div>
  )
}

export default Download