import '../App.css'
import { Route, Routes } from "react-router-dom";
import Hero from '../Elements/Hero'
import Navbar from '../Elements/Navbar'
import Highlights from '../Elements/Highlights'
import Footer from '../Elements/Footer'

function Home() {

  return (
    <div className="App">
        <Hero />
        <Highlights />
    </div>
  )
}

export default Home
