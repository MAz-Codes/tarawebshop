import { Highlight } from '@chakra-ui/react'
import './App.css'
import Hero from './Hero'
import Navbar from './Navbar'
import Highlights from './Highlights'
import Footer from './Footer'

function App() {

  return (
    <div className="App">
      <Navbar  />
      <Hero />
      <Highlights />
      <Footer />
    </div>
  )
}

export default App
