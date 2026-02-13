import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Teams from './components/Teams'
import Gallery from './components/Gallery'
import Contact from './components/Contact'
import Footer from './components/Footer'


// jste router use nahi kele ahe ajun 
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app">
      <Header />
      <main className="main-content">
        <Hero />
        <About />
        <Teams />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
// this componet export succesfull ok 
export default App
