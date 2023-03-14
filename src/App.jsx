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
              <Route path="/tarawebshop" element={<Home />} />
              <Route path="/tarawebshop/about" element={<About />} />
              <Route path="/tarawebshop/catalog" element={<Catalog />} />
              <Route path="/tarawebshop/contact" element={<ContactPage />} />
              <Route path="/tarawebshop/success" element={<SuccessContact />} />
              <Route path="/tarawebshop/cart" element={<ShoppingCart />} />
            </Routes>
            <Footer />
          </ItemContext.Provider>
        </CartContext.Provider>
      </div>
    </AnimatePresence>
  )
}

export default App