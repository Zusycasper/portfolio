import React from 'react'
import Header from '../components/header/Header'
import Home from './home/Home'
import About from './about/About'

import Contact from './Contact'
import Projects from './projects/Projects'

function Portfolio() {
  return (
    <div>
      <div className="header-section">
        <Header />
        </div>
        <div className='body-section' sx={{ marginTop: '64px', innerWidth: '100%' }}>
            <Home />
            <About />
            <Projects />
            <Contact />
        </div>
    </div>
  )
}

export default Portfolio