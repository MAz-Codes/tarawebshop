import './App.css'
import {useState, createContext} from "react"
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home"
import Navbar from './Elements/Navbar'
import Footer from './Elements/Footer'
import About from './Pages/About';
import Catalog from './Pages/Catalog';
import ContactPage from './Pages/ContactPage';
import SuccessContact from './Pages/SuccessContact';

export const CartContext = createContext();

function App() {

  const [cartnum , setCartnum] = useState(0)

  return (
    <div className="App">
      <CartContext.Provider value={{cartnum, setCartnum}}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/success" element={<SuccessContact />} />
        </Routes>
        <Footer />
      </CartContext.Provider>
    </div>
  )
}

export default App
