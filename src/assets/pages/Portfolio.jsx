import React from 'react'
import Header from '../components/header/Header'
import Home from './Home'
import About from './About'
import Projects from './Projects'
import Contact from './Contact'

function Portfolio() {
  return (
    <div>
        <Header />
        <div>
            <Home />
            <About />
            <Projects />
            <Contact />
        </div>
    </div>
  )
}

export default Portfolio