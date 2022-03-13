import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Fruits from './routes/FruitsRouter/FruitsRouter'
import Cart from './routes/CartRouter/CartRouter'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Fruits />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  )
}

export default App
