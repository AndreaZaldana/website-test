import React from 'react'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons'
import './Download.css'

const Download = () => {
  const downloadFile = () =>{
    const fileUrl = 'https://drive.google.com/uc?export=download&id=1BdC4oA2bgoQpxNGvrvaV7fYwUJCH0dIx';

    axios.get(fileUrl, {responseType: 'blob'}).then(response => {
      const url = window.URL.createObjectURL(new Blob([response.data]));

      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'CRZ');

      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    }).catch(error => {
      console.error('Error descargando archivo:', error)
    })

  }
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