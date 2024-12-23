import './App.css'
import Header from './assets/components/Header'
import About from './assets/pages/About'
import Contact from './assets/pages/Contact'
import Home from './assets/pages/Home'
import Projects from './assets/pages/Projects'

function App() {

  return (
    <div className='App'>
    <Header/>
    <main>
      <Home/>
      <About/>
      <Contact/>
      <Projects/>
    </main>
      
    </div>
  )
}

export default App
