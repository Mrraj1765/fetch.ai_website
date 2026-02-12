import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'


// jste router use nahi kele ahe ajun 
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app">
      <Header />
      <main className="main-content">
        <Hero />
      </main>
    </div>
  )
}
// this componet export succesfull ok 
export default App
