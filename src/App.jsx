import {useState, createContext} from "react"
import { Route, Routes } from "react-router-dom";
import {AnimatePresence} from "framer-motion"

import './App.css'
import Home from "./Pages/Home"
import Navbar from './Elements/Navbar'
import Footer from './Elements/Footer'
import About from './Pages/About';
import Catalog from './Pages/Catalog';
import ContactPage from './Pages/ContactPage';
import ShoppingCart from './Pages/ShoppingCart';
import SuccessContact from './Pages/SuccessContact';


export const CartContext = createContext();
export const ItemContext = createContext();

function App() {

  const [cartnum , setCartnum] = useState(0)
  const [item , setItem] = useState([])

  return (
    <AnimatePresence >
      <div className="App">
        <CartContext.Provider value={{cartnum, setCartnum}}>
          <ItemContext.Provider value={{item, setItem}}>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/catalog" element={<Catalog />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/success" element={<SuccessContact />} />
              <Route path="/cart" element={<ShoppingCart />} />
            </Routes>
            <Footer />
          </ItemContext.Provider>
        </CartContext.Provider>
      </div>
    </AnimatePresence>
  )
}

export default App