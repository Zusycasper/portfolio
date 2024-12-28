import './App.css'
import Header from './assets/components/header/Header'
import About from './assets/pages/about/About'
import Contact from './assets/pages/contact/Contact'
import Home from './assets/pages/home/Home'
import Projects from './assets/pages/projects/Projects'


function App() {

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

export default App
