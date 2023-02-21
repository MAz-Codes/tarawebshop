import './App.css'
import { Route, Routes } from "react-router-dom";
import Hero from './Hero'
import Navbar from './Navbar'
import Highlights from './Highlights'
import Footer from './Footer'

function Home() {

  return (
    <div className="App">
        <Hero />
        <Highlights />
    </div>
  )
}

export default Home
