import React from 'react'
import Navbar from './components/navbar/Navbar'
import Hero from './components/hero/Hero'
import About from './components/about/About'
import Values from './components/about-extra/Values'
import Title from './components/title/Title'
import Projects from './components/projects/Projects'
import Download from './components/download/Download'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import NavProvider from './utilities/NavContext'
import Products from './components/services/Products'

const App = () => {
  return (
    <div>
      <NavProvider>
        <Navbar />
        <Hero />
        <div className="container">
          <About />
          <Title subTitle='Cómo nos regimos' title='Misión y Visión'/>
          <Values />
          <Title subTitle='Lo que ofrecemos' title='Servicios'/>
          <Products />
        </div>
        <Title subTitle='Conoce nuestros proyectos' title='Proyectos'/>
        <Projects />
        <div className="container">
          <Title subTitle='Para una atención más personalizada, contáctanos' title=''/>
          <Contact />
          <Download />
        </div>
        <Footer/>
      </NavProvider>
    </div>
  )
}

export default App
