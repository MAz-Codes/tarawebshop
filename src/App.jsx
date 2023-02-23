import './App.css'
import { Route, Routes } from "react-router-dom";
import Home from "./Home"
import Navbar from './Navbar'
import Footer from './Footer'
import About from './About';
import Catalog from './Catalog';
import ContactPage from './ContactPage';
import SuccessContact from './SuccessContact';

function App() {

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/success" element={<SuccessContact />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
