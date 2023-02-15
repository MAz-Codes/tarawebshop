import { Highlight } from '@chakra-ui/react'
import './App.css'
import Hero from './Hero'
import Navbar from './Navbar'
import Highlights from './Highlights'

function App() {

  return (
    <div className="App">
      <Navbar position={"sticky"} />
      <Hero />
      <Highlights />
    </div>
  )
}

export default App
